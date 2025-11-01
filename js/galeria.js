// galeria.js
// Galería interactiva. Vanilla JS dentro del marco teórico.

document.addEventListener("DOMContentLoaded", function() {
  const imagenes = document.querySelectorAll(".thumb");
  const modal = document.getElementById("modal");
  const imagenAmpliada = document.getElementById("imagen-ampliada");
  const caption = document.getElementById("caption");
  const cerrar = document.getElementById("cerrar");

  // Cuando se hace clic en una miniatura
  imagenes.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "flex";
      imagenAmpliada.src = this.src;
      caption.textContent = this.alt;
    });
  });

  // Cerrar modal al hacer clic en la X
  cerrar.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Cerrar modal si se hace clic fuera de la imagen
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
