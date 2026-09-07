const CACHE_VERSION = 'aura-v1';
const CACHE_NAME = `aura-static-${CACHE_VERSION}`;
const BASE = new URL('./', self.location).href;
const INDEX_URL = new URL('index.html', BASE).href;

const PRECACHE = [BASE, INDEX_URL];

const AUDIO_EXT = ['.mp3', '.m4a', '.aac', '.ogg', '.wav', '.flac', '.opus', '.weba'];
const STREAM_HINTS = ['radio', 'stream', 'icecast', 'shoutcast', 'm3u8', 'audio/'];

function isAudioRequest(request) {
  const url = request.url.toLowerCase();
  if (AUDIO_EXT.some((ext) => url.includes(ext))) return true;
  if (STREAM_HINTS.some((h) => url.includes(h))) return true;
  if (request.destination === 'audio' || request.destination === 'video') return true;
  if (request.headers.get('range')) return true;
  return false;
}

function isApiRequest(url) {
  return (
    url.includes('api.lyrics.ovh') ||
    url.includes('radio-browser.info') ||
    url.includes('fonts.googleapis.com') ||
    url.includes('fonts.gstatic.com')
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (isAudioRequest(request)) return;

  if (isApiRequest(request.url)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(INDEX_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
