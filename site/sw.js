/* Académie Kizuna : copie hors ligne de l'appli (0.17).
   - Pages, scripts et icônes du site : réseau d'abord, copie en cache si pas de réseau.
   - Bibliothèque Supabase et polices : cache d'abord (adresses versionnées).
   - Données Supabase : jamais mises en cache ici (l'appli garde sa propre copie). */
var CACHE = "kizuna-v1";
var CORE = ["./", "index.html", "manifest.webmanifest", "icons/favicon-32.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function networkFirst(req) {
  return fetch(req).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req).then(function (hit) {
      if (hit) return hit;
      if (req.mode === "navigate") return caches.match("index.html", { ignoreSearch: true }).then(function (x) { return x || caches.match("./"); });
      return caches.match(req, { ignoreSearch: true });
    });
  });
}

function cacheFirst(req) {
  return caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.ok || res.type === "opaque")) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var u = new URL(req.url);
  if (/supabase\.co$/.test(u.hostname)) return;
  if (u.origin === self.location.origin) { e.respondWith(networkFirst(req)); return; }
  if (/cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u.hostname)) { e.respondWith(cacheFirst(req)); }
});
