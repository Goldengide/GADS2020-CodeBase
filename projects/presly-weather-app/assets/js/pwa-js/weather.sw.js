self.addEventListener('install', event => {
    function onInstall() {
        return caches.open('static')
            .then(cache => cache.addAll([
                ''
            ]))
    }
});