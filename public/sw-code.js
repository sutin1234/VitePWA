
self.addEventListener("fetch", (event) => {
  console.log("on fetch", event);
  event.respondWith(
    (async () => {
      const store = await caches.open("name-forcer");
      const req = event.request;
      console.log("name-forcer", req);
      const cached = await store.match(req);
      return cached || fetch(req);
    })()
  );
});
