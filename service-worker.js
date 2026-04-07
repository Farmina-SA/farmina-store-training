// ═══════════════════════════════════════
// FARMINA STAFF TRAINING — SERVICE WORKER
// Strategy: Cache-first for all local assets.
// All app data is local (no API calls), so full offline use is supported
// after the first load.
//
// To force a cache refresh after deploying updates, increment the
// CACHE_NAME version below (e.g. farmina-v2).
// ═══════════════════════════════════════

// IMPORTANT: Bump this version on every deploy to force users to get the latest assets!
const CACHE_NAME = 'farmina-v5';

const PRECACHE_ASSETS = [
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/products.js',
  './js/ingredients.js',
  './js/quiz.js',
  './js/tips.js',
  './js/calculator.js',
  './js/app.js',
  './assets/logo.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
];

// ── Install: precache all assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches and notify clients if updated ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
  // Notify clients to reload if a new service worker is activated
  self.clients.matchAll({type: 'window'}).then(clients => {
    clients.forEach(client => {
      client.postMessage({type: 'NEW_VERSION_AVAILABLE'});
    });
  });
});

// ── Fetch: cache-first, fall back to network ──
self.addEventListener('fetch', event => {
  // Only handle GET requests for same-origin or relative assets
  if (event.request.method !== 'GET') return;

  // Let Google Fonts go straight to network (external, non-critical)
  if (event.request.url.includes('fonts.googleapis.com') ||
      event.request.url.includes('fonts.gstatic.com')) {
    event.respondWith(fetch(event.request).catch(() => new Response('')));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      // Not in cache — try network and cache the response for next time
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
