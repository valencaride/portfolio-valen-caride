document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    cards.forEach(card => {
        if (isMobile) {
            card.dataset.clickCount = 0; // Inicializa el contador de clics

            card.addEventListener('click', function(event) {
                toggleOverlay(this, event);
            });
        } else {
            card.addEventListener('click', function(event) {
                const url = 'https://www.valencaride.com/src/cards/card-1/index.html';
                if (url) {
                    window.location.href = url; // Redirigir a la URL en escritorio
                }
            });
        }
    });
});

function toggleOverlay(card, event) {
    const overlay = card.querySelector('.card-overlay');
    const clickCount = parseInt(card.dataset.clickCount);
    const url = 'https://www.valencaride.com/src/cards/card-1/index.html';

    if (clickCount === 0) {
        // Mostrar el título en el primer clic
        overlay.style.display = 'flex';
        card.dataset.clickCount = 1;
        event.preventDefault(); // Prevenir la redirección
    } else if (clickCount === 1 && url) {
        // Redirigir en el segundo clic si la URL está definida
        window.location.href = url;
     }
        }