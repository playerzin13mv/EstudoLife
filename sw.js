const C="estudolife-v1",F=["./","index.html","icon.svg","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>{if(e.request.url.includes("googleapis.com"))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
