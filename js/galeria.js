// js/galeria.js - Versión sin plugin de video
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('lightgallery');

    if (galleryContainer) {
        // Inicialización de LightGallery SIN el plugin lgVideo
        lightGallery(galleryContainer, { 
            selector: 'a',  //LightGallery mira dentro del contenedor, y hace clicables los elementos que son enlaces (<a>). En mi HTML, cada imagen está envuelta en un <a>.
            speed: 500,
            closable: true,
            download: false 
        });
    }
});