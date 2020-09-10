if('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/pwa-js/weather.sw.js", {
        scope: '/'
    })
}
else {
    console.log("Service Worker is not supported here");
}