self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const store = await caches.open("name-forcer");
      const req = event.request;
      console.log("on fetch ", req);
      const cached = await store.match(req);
      return cached || fetch(req);
    })()
  );
});
