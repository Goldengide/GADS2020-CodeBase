
const staticDevWeather = "presley-weather-app";
const assets = [
    "/index.html",
    "assets/css/theme.css",
    "assets/css/template.css",
    "assets/img/presley-weather-icon.png",
    "assets/img/android-chrome-192x192.png",
    "assets/img/android-chrome-512x512.png",
    "assets/img/apple-touch-icon.png",
    "assets/img/browserconfig.xml",
    "assets/img/favicon.ico",
    "assets/img/favicon-16x16.png",
    "assets/img/favicon-32x32.png",
    "assets/img/mstile-150x150.png",
    "assets/img/safari-pinned-tab.svg",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevWeather).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});



/* self.addEventListener('install', event => {
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
}) */