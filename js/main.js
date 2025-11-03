// js/main.js
//boton scrolleo

document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    
    // Verificamos si el botón existe en esta página antes de intentar manipularlo
    if (scrollBtn) { 
        
        // 1. Lógica para mostrar/ocultar el botón (manejo de evento 'scroll')
        function toggleScrollBtn() {
            // Muestra el botón si el usuario se ha desplazado más de 400 píxeles hacia abajo
            if (window.scrollY > 400 || document.documentElement.scrollHeight - window.innerHeight < 450) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }

        // 2. Lógica para subir (manejo de evento 'click')
        function scrollToTop() {
            // window.scrollTo: método del objeto window para hacer scroll
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }

        // Vincula las funciones a los eventos
        window.addEventListener("scroll", toggleScrollBtn);
        scrollBtn.addEventListener("click", scrollToTop);
    }
});