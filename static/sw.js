importScripts('https://arc.io/arc-sw-core.js')
importScripts('../uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
