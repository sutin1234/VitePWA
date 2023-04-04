if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    console.log("serviceWorker loaded");
    navigator.serviceWorker.register("/sw.js", { scope: "/" });
  });
}
