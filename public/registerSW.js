// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     console.log("serviceWorker loaded");
//     navigator.serviceWorker.register("/sw.js", { type: 'classic', scope: 'https://vite-pbo2zv8z1-sutin1234.vercel.app'});
//   });
// }


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('SW registration succeeded with scope:', registration.scope);
  }).catch(function(e) {
    console.log('SW registration failed with error:', e);
  });
}