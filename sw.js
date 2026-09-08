// AURA Music Player — Service Worker
// ============================================================
// Deploy notes (GitHub Pages):
// - Every path below is RELATIVE ("./..."), never "/..." — GitHub Pages
//   project sites serve from a subpath (yourname.github.io/reponame/), and
//   an absolute "/sw.js" would resolve to the wrong place there.
// - Bump CACHE_VERSION every time you push a new version of the HTML file.
//   This is a plain static file with no build step, so there's no
//   automatic content-hashing to detect changes — the version string is
//   what tells returning visitors "there's a new one, go get it."
// - APP_SHELL lists every local file to precache. If your main HTML file
//   isn't named index.html, change it here AND in manifest.json's
//   start_url, AND in the <link rel="manifest"> / registerServiceWorker
//   snippet in the HTML itself.
// ============================================================

const CACHE_VERSION = 'v1';
const CACHE_NAME = `aura-player-${CACHE_VERSION}`;

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET — everything else (POST, etc.) passes straight through.
  if (req.method !== 'GET') return;

  // Never intercept blob:/data: URLs — that's how uploaded audio and
  // extracted cover art are served, straight from memory/IndexedDB, and
  // the service worker can't (and shouldn't) touch those anyway.
  if (req.url.startsWith('blob:') || req.url.startsWith('data:')) return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Page navigations: network-first. If you're online, you always get
  // whatever's actually deployed right now — no "why isn't my fix showing
  // up" confusion. Falls back to the cached shell only when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Same-origin static assets (icons, manifest, css/js if you ever split
  // them out): cache-first, since these only change when you bump
  // CACHE_VERSION anyway.
  if (sameOrigin) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }))
    );
    return;
  }

  // Cross-origin (Google Fonts, etc.): stale-while-revalidate — serve the
  // cached copy immediately if there is one (fast, works offline), and
  // quietly refresh the cache in the background for next time.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
