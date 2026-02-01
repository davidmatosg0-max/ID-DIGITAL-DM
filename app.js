// Guardar datos del formulario en localStorage y redirigir a 'nuevo id.html'
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const empresa = document.getElementById('empresa')?.value || '';
            const nombre = document.getElementById('nombre').value;
            const cargo = document.getElementById('cargo').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const fotoInput = document.getElementById('foto');
            const logoInput = document.getElementById('logo');
            let foto = '';
            let logo = '';
            let idUnico = 'ID-' + Date.now() + '-' + Math.floor(Math.random()*10000);
            // Leer logo y foto como base64
            const leerArchivo = (input, callback) => {
                if (input && input.files && input.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) { callback(e.target.result); };
                    reader.readAsDataURL(input.files[0]);
                } else {
                    callback('');
                }
            };
            leerArchivo(fotoInput, function(fotoData) {
                foto = fotoData;
                leerArchivo(logoInput, function(logoData) {
                    logo = logoData;
                    localStorage.setItem('idData', JSON.stringify({ empresa, nombre, cargo, telefono, email, foto, logo, idUnico }));
                    window.location.href = 'nuevo id.html';
                });
            });
        });
    }

    // Mostrar datos en 'nuevo id.html'
    if (window.location.pathname.includes('nuevo id.html')) {
        const data = JSON.parse(localStorage.getItem('idData') || '{}');
        if (data && data.nombre) {
            if(document.querySelector('.id-empresa')) document.querySelector('.id-empresa').textContent = data.empresa;
            document.querySelector('.id-name').textContent = data.nombre;
            document.querySelector('.id-major').textContent = 'Cargo: ' + data.cargo;
            if(document.querySelector('.id-telefono')) document.querySelector('.id-telefono').textContent = 'Teléfono: ' + data.telefono;
            document.querySelector('.id-email').textContent = 'Email: ' + data.email;
            if (data.foto) {
                document.querySelector('.id-photo').src = data.foto;
            }
            if (data.logo && document.querySelector('.id-logo-img')) {
                document.querySelector('.id-logo-img').src = data.logo;
                document.querySelector('.id-logo-img').style.display = 'block';
            }
            if (data.idUnico && document.querySelector('.id-qr')) {
                // Generar QR moderno usando API externa
                document.querySelector('.id-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(data.idUnico)}`;
            }
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('ID Digital Local iniciado');
});
