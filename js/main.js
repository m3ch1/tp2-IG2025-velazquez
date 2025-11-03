// js/main.js
//boton scrolleo

document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById("scrollToTopBtn"); //Creo una variable llamada scrollBtn que guarda el elemento HTML del botón flotante, buscándolo por su id "scrollToTopBtn"
    
    // Verificamos si el botón existe en esta página antes de intentar manipularlo
    if (scrollBtn) { 
        
        // Lógica para mostrar/ocultar el botón (manejo de evento 'scroll')
        function toggleScrollBtn() { // Funcion llamada toggleScrollBtn para mostrar u ocultar el botón según la posición del usuario.
            // Muestra el botón si el usuario se ha desplazado más de 400 píxeles hacia abajo
            if (window.scrollY > 400 || document.documentElement.scrollHeight - window.innerHeight < 450) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }

        // Lógica para subir (evento 'click')
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