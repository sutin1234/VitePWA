// import { NavigationRoute, registerRoute } from 'workbox-routing'
// import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'

// // self.__WB_MANIFEST is default injection point
// precacheAndRoute(self.__WB_MANIFEST)

// // to allow work offline
// registerRoute(new NavigationRoute(
//   createHandlerBoundToURL('index.html'),
//   { denylist: [/^\/backoffice/] },
// ))

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
