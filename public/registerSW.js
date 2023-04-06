if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    console.log("serviceWorker loaded");
    navigator.serviceWorker.register("/sw.js", { type: 'classic', scope: 'https://vite-pbo2zv8z1-sutin1234.vercel.app'});
  });
}
