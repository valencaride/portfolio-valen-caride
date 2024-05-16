 // Seleccionar el elemento con la clase 'logo'
 var logo = document.getElementById('logo');

 // Agregar un event listener para el evento 'click'
 logo.addEventListener('click', function() {
     // Redireccionar a la página de inicio
     window.location.href = "/index.html";
 });


// // Esperar a que el documento se haya cargado completamente
// document.addEventListener("DOMContentLoaded", function() {
//     // Obtener todos los botones "View More"
//     var viewMoreButtons = document.querySelectorAll(".overlay button");

//     // Iterar sobre cada botón
//     viewMoreButtons.forEach(function(button) {
//         // Agregar un evento de clic a cada botón
//         button.addEventListener("click", function() {
//             // Obtener el enlace asociado al botón y redirigir al usuario
//             var link = button.parentElement.querySelector("a");
//             if (link) {
//                 window.location.href = link.href;
//             }
//         });
//     });

//     // Ajustar los estilos de los títulos de los proyectos para asegurar la visibilidad
//     var projectTitles = document.querySelectorAll(".overlay h2");
//     projectTitles.forEach(function(title) {
//         // Ajustar el color del texto y otros estilos según sea necesario
//         title.style.color = "#ffffff"; // Color blanco para el texto
//         title.style.fontSize = "1.2rem"; // Tamaño de fuente adecuado
//         // Otros ajustes de estilo aquí...
//     });
// });
