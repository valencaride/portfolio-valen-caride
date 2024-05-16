 // Seleccionar el elemento con la clase 'logo'
 var logo = document.getElementById('logo');

 // Agregar un event listener para el evento 'click'
 logo.addEventListener('click', function() {
     // Redireccionar a la página de inicio
     window.location.href = "/index.html";
 });

        // Función para manejar eventos táctiles y de clic en los botones "View More"
        function handleButtonClick(event) {
            // Evitar el comportamiento predeterminado del evento (navegación)
            event.preventDefault();
            // Obtener el enlace asociado al botón y redirigir al usuario
            var link = this.parentElement.querySelector("a");
            if (link) {
                window.location.href = link.href;
            }
        }

        // Función para mostrar los títulos de los proyectos y los botones "View More" al tocar la card
        function handleCardTouch(event) {
            // Mostrar el título del proyecto y el botón "View More"
            var overlay = this.querySelector(".overlay");
            if (overlay) {
                overlay.style.opacity = "1";
            }
        }

        // Esperar a que el documento se haya cargado completamente
        document.addEventListener("DOMContentLoaded", function() {
            // Obtener todas las cards
            var cards = document.querySelectorAll(".item");
            // Iterar sobre cada card
            cards.forEach(function(card) {
                // Agregar un evento táctil para mostrar el título y el botón
                card.addEventListener("touchstart", handleCardTouch);
                // Obtener el botón "View More" dentro de la card
                var button = card.querySelector(".overlay button");
                if (button) {
                    // Agregar un evento de clic para manejar el botón "View More"
                    button.addEventListener("click", handleButtonClick);
                }
            });
        });
    