// contacto.js

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

    let valido = true; //Variable booleana que asume que el formulario está correcto hasta que se encuentre algo mal. Si aparece un error, la pones en false.

    // Validación de nombre
    //trim() elimina espacios al inicio y al final. Si queda vacío, considerás que no hay nombre. Si esta vacio, muestra el mensaje en errorNombre y marca valido = false.
    if (nombre.value.trim() === "") {
      errorNombre.textContent = "Por favor ingresá tu nombre.";//
      valido = false; 
    }

    // Validación de email con regexp simple
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; //^ indica inicio, $ fin, [^@\s]+ uno o mas caracteres que no sean arroba ni espacio, \. un punto literal.

    //Primero compruebo si esta vacio
    if (email.value.trim() === "") {
      errorEmail.textContent = "El email es obligatorio.";
      valido = false;

    // Si no esta vacio, compruebo si cumple con el patron regexEmail.test(email.value)
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
