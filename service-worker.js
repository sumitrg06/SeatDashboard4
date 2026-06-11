// service-worker.js

const CACHE_NAME = "seat-dashboard-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images/seat_green.png",
  "./images/seat_red.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});