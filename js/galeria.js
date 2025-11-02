// js/galeria.js - Versión sin plugin de video
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('lightgallery');

    if (galleryContainer) {
        // Inicialización de LightGallery SIN el plugin lgVideo
        lightGallery(galleryContainer, {
            selector: 'a',
            speed: 500,
            // Quitamos la línea de plugins: [lgVideo]
            closable: true,
            download: false 
        });
    }
});