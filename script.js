const form = document.querySelector('form');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // evitar que el formulario se envíe automáticamente

  // obtener los valores de los campos del formulario
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const message = messageInput.value;

  // hacer la petición HTTP POST al servidor
fetch('/submit', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => {
    // manejar la respuesta del servidor
    console.log('Respuesta del servidor:', response);
    // hacer algo con la respuesta, como mostrar un mensaje al usuario
    messageInput.value = ''; // limpiar el área de texto
})
.catch(error => {
    // manejar errores en la petición HTTP
    console.error('Error al enviar el formulario:', error);
    // hacer algo para notificar al usuario del error
});
});
