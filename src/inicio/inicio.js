 // Seleccionar el elemento con la clase 'logo'
 var logo = document.getElementById('logo');

 // Agregar un event listener para el evento 'click'
 logo.addEventListener('click', function() {
     // Redireccionar a la página de inicio
     window.location.href = "/index.html";
 });

 document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            toggleOverlay(card);
        });
    });
});
function toggleOverlay(image) {
    const overlay = image.parentNode.querySelector('.card-overlay');
    if (overlay.style.opacity === '1') {
        overlay.style.opacity = '0';
    } else {
        overlay.style.opacity = '1';
    }
}


    