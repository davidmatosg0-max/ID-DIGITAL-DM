self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('id-digital-local').then(function(cache) {
      return cache.addAll([
        '/',
        '/Bienvenido.html',
        '/contactos.html',
        '/ID.html',
        '/nuevo-contacto.html',
        '/Formulario de perfil.html',
        '/style.css',
        '/app.js',
        '/lang.js',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
