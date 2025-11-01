// contacto.js
// Validación del formulario de contacto. Vanilla JS dentro del marco teórico.

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-contacto");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const resultado = document.getElementById("resultado");

  // Elementos para mostrar errores
  const errorNombre = document.getElementById("error-nombre");
  const errorEmail = document.getElementById("error-email");
  const errorMensaje = document.getElementById("error-mensaje");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Limpia mensajes previos
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    resultado.textContent = "";

    let valido = true;

    // Validación de nombre
    if (nombre.value.trim() === "") {
      errorNombre.textContent = "Por favor ingresá tu nombre.";
      valido = false;
    }

    // Validación de email (simple)
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === "") {
      errorEmail.textContent = "El email es obligatorio.";
      valido = false;
    } else if (!regexEmail.test(email.value)) {
      errorEmail.textContent = "El formato del email no es válido.";
      valido = false;
    }

    // Validación de mensaje
    if (mensaje.value.trim().length < 5) {
      errorMensaje.textContent = "El mensaje debe tener al menos 5 caracteres.";
      valido = false;
    }

    // Si todo está correcto
    if (valido) {
      resultado.textContent = "Formulario enviado correctamente. ¡Gracias!";
      resultado.classList.add("text-success");
      form.reset();
    } else {
      resultado.textContent = "Por favor corregí los campos marcados.";
      resultado.classList.remove("text-success");
      resultado.classList.add("text-warning");
    }
  });
});
