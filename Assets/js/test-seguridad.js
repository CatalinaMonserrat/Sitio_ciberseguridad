// Boton index beneficios
$(document).ready(function() {
  $("#btn-beneficios").click(function() {
    $("#beneficios").slideToggle();
  });
});

//boton amenazas
$(document).ready(function() {
  $('#btn-info-extra').click(function() {
    $('#info-extra').slideToggle(); // Alterna mostrar/ocultar con efecto suave
  });
});

// Mensaje registro formulario

const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const acepto = document.getElementById('acepto');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nombre.value.trim() === '' || apellido.value.trim() === '' || email.value.trim() === '' || telefono.value.trim() === '' || !acepto.checked) {
    alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
  } else {
    alert('¡Registro exitoso!');
  }
});

// Función Modal
function evaluarTest() {
  evaluarPregunta('respuesta1', 'feedback1');
  evaluarPregunta('respuesta2', 'feedback2');
  evaluarPregunta('respuesta3', 'feedback3');
}

function evaluarPregunta(nombrePregunta, idFeedback) {
  const opciones = document.getElementsByName(nombrePregunta);
  const resultado = document.getElementById(idFeedback);
  let seleccionada = false;

  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      seleccionada = true;
      if (opciones[i].value === "correcto") {
        resultado.innerHTML = "<span class='text-success fw-bold'>¡Correcto!</span>";
      } else {
        resultado.innerHTML = "<span class='text-danger fw-bold'>Incorrecto.</span>";
      }
    }
  }

  if (!seleccionada) {
    resultado.innerHTML = "<span class='text-warning'>Selecciona una opción.</span>";
  }
}