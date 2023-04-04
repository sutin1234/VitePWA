export async function displayRenamedPDF(file: File | Blob, filename: string) {
    const reg_path = '/name-forcer/';
    const url = reg_path + filename;
    const store = await caches.open('name-forcer');
    await store.put(url, new Response(file));
    const frame = document.createElement('iframe');
    frame.style.width = '100%';
    frame.style.height = '100vh';
    frame.src = url;
    // document.body.append(frame);

    window.open(url, '_blank')
}
// clear previously cached files
(async () => {
    const store = await caches.open('name-forcer');
    const keys = await store.keys();
    for (const req of keys) {
        store.delete(req);
    }
})();