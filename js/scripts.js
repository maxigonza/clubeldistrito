// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar scripts para interactividad
    // Ejemplo: un evento de clic para un botón
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Gracias por tu interés en el Club El Distrito. ¡Pronto nos pondremos en contacto!');
        });
    }
});