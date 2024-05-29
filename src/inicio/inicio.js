document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            toggleOverlay(this, event);
        });
    });
});

function toggleOverlay(card, event) {
    const overlay = card.querySelector('.card-overlay');
    const title = card.querySelector('.card-overlay h2');

    // Verificar si el título está visible
    const titleVisible = title && window.getComputedStyle(title).getPropertyValue("opacity") === "1";

    if (!titleVisible) {
        // Mostrar el título
        overlay.style.opacity = '1';
    } else {
        // Redirigir a otra página
        const targetUrl = card.dataset.targetUrl; // Obtener la URL de la tarjeta
        if (targetUrl) {
            window.location.href = targetUrl; // Redirigir a la URL especificada
        }
    }

    // Detener la propagación del evento para evitar que se active el evento click del contenedor padre
    event.stopPropagation();
}
