/*
 * aura-ai-local.js — AURA.AI's brain, kept in its own file on purpose.
 *
 * Job of this file: turn (system prompt + user message) into reply text,
 * running entirely in the browser via Transformers.js (no server, no
 * account, no phone verification, no API key — so no sanctions/region
 * issues either). Nothing in here touches AURA's audio graph directly.
 *
 * Contract with the main AURA HTML:
 *   - window.AuraAI.chat(systemPrompt, userText, onStatus) -> Promise<string>
 *   - window.AuraAI.getStatus() -> { state, error }
 * Every failure path inside this file is caught and turned into a normal
 * rejected Promise with a short message — it never throws an uncaught
 * error into the page, and it never touches any AURA DOM/audio code. If
 * this file fails to load at all (blocked CDN, syntax error, whatever),
 * `window.AuraAI` simply won't exist and AURA's own code already checks
 * for that before using it — the rest of the player is unaffected either way.
 */
(function () {
  const MODEL_ID = 'onnx-community/Qwen3-0.6B-ONNX';
  const CDN_URL = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3';

  let generatorPromise = null;
  let state = 'idle'; // idle | loading | ready | error
  let lastError = null;

  async function getGenerator(onStatus) {
    if (generatorPromise) return generatorPromise;
    state = 'loading';
    generatorPromise = (async () => {
      const { pipeline } = await import(CDN_URL);
      const useWebGPU = typeof navigator !== 'undefined' && !!navigator.gpu;
      // q4f16 is roughly half the download size of q4, but it relies on
      // fp16 compute kernels that the wasm/CPU backend doesn't reliably
      // support — so we only use it when WebGPU is available, and fall
      // back to plain q4 on wasm.
      const generator = await pipeline('text-generation', MODEL_ID, {
        dtype: useWebGPU ? 'q4f16' : 'q4',
        device: useWebGPU ? 'webgpu' : 'wasm',
        progress_callback: (p) => {
          try {
            if (onStatus && p && p.status === 'progress' && p.total) {
              onStatus({ percent: Math.round((p.loaded / p.total) * 100), file: p.file });
            }
          } catch (e) { /* never let a UI callback bug break loading */ }
        }
      });
      state = 'ready';
      return generator;
    })().catch((e) => {
      state = 'error';
      lastError = e && e.message ? e.message : String(e);
      generatorPromise = null; // allow a retry on the next call
      throw e;
    });
    return generatorPromise;
  }

  async function chat(systemPrompt, userText, onStatus) {
    try {
      const generator = await getGenerator(onStatus);
      const messages = [
        { role: 'system', content: systemPrompt || '' },
        { role: 'user', content: userText || '' }
      ];
      const output = await generator(messages, { max_new_tokens: 400, do_sample: false });
      const last = output && output[0] && output[0].generated_text;
      // transformers.js chat pipelines return the full message array; the
      // reply is the last assistant turn
      if (Array.isArray(last)) {
        const assistantTurn = last[last.length - 1];
        return (assistantTurn && assistantTurn.content) || '';
      }
      return typeof last === 'string' ? last : '';
    } catch (e) {
      const msg = e && e.message ? e.message : String(e);
      throw new Error('AURA.AI local model failed: ' + msg);
    }
  }

  window.AuraAI = {
    chat,
    preload: (onStatus) => getGenerator(onStatus), // same download, just triggerable on its own
    getStatus: () => ({ state, error: lastError }),
    _modelId: MODEL_ID
  };
})();
