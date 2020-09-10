self.addEventListener('install', event => {
    function onInstall() {
        return caches.open('static')
            .then(cache => cache.addAll([
                '/files/directory'
            ]));
            
    }
    event.waitUntil(onInstall(event));
});

self.addEventListener('fetch', event => {
    console.log('fetching water..');
})