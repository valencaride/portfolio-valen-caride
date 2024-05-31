document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.dataset.clickCount = 0; // Inicializa el contador de clics

        card.addEventListener('click', function(event) {
            toggleOverlay(this, event);
        });
    });
});

function toggleOverlay(card, event) {
    const overlay = card.querySelector('.card-overlay');
    const clickCount = parseInt(card.dataset.clickCount);

    if (clickCount === 0) {
        // Mostrar el título en el primer clic
        overlay.style.display = 'flex';
        card.dataset.clickCount = 1;
        event.preventDefault(); // Prevenir la redirección
    } else if (clickCount === 1) {
        // Redirigir en el segundo clic
        window.location.href = card.dataset.url; //
    }
}