document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            toggleOverlay(this); // Pasamos 'this' como argumento
        });
    });
});

function toggleOverlay(card) {
    const overlay = card.querySelector('.card-overlay'); // Seleccionar el overlay dentro de la tarjeta
    if (overlay.style.opacity === '1' || overlay.style.opacity === '') { // Verificar si el overlay está visible
        overlay.style.opacity = '0'; // Ocultar el overlay
    } else {
        overlay.style.opacity = '1'; // Mostrar el overlay
    }
}
