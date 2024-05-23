

window.onload = function () {
	var descripcion = document.getElementById("descripcion");
	var textoCompleto = descripcion.innerText;
	descripcion.setAttribute("data-texto-completo", textoCompleto);
	descripcion.innerText = textoCompleto.substring(0, textoCompleto.length / 2) + "...";
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar la flecha de desplazamiento
    const scrollToTopButton = document.getElementById('scrollToTop');
    const imagesSection = document.querySelector('.container.mb-2');

    // Agregar un event listener para el evento 'click'
    scrollToTopButton.addEventListener('click', function() {
        // Verificar si estamos en la parte superior o inferior de la página
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            // Desplazarse suavemente al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Desplazarse suavemente a la sección de imágenes
            imagesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Agregar un event listener para detectar el desplazamiento de la página
    window.addEventListener('scroll', function() {
        // Obtener la posición actual de desplazamiento vertical
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Cambiar la apariencia de la flecha dependiendo de la posición del desplazamiento
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            scrollToTopButton.classList.add('upwards');
        } else {
            scrollToTopButton.classList.remove('upwards');
        }
    });
});

