
// var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// var video = document.getElementById('backgroundVideo');

// // Función para iniciar la reproducción del video
// function startVideo() {
//     video.play().then(function() {
//         // Video iniciado
//         console.log('Video started playing');
//     }).catch(function(error) {
//         // Error al iniciar la reproducción del video
//         console.error('Video playback error:', error);
//     });
// }

// // Si es iOS, espera a que el usuario interactúe con la página para iniciar el video
// if (isiOS) {
//     document.body.addEventListener('touchstart', function() {
//         startVideo();
//     }, { once: true }); // Solo se activará una vez
// } else {
//     // En otros dispositivos, inicia el video automáticamente
//     startVideo();
// }
// //-----------------------------------------------------------------

//     // Espera 5 segundos antes de mostrar el video
//     setTimeout(function() {
//         var loader = document.getElementById('loader');
//         var principal = document.getElementById('principal');
//         loader.style.display = 'none';
//         principal.classList.add('loaded');
//     }, 3000);
var video = document.getElementById('backgroundVideo');

// Función para iniciar la reproducción del video
function startVideo() {
    video.play().then(function() {
        // Video iniciado
        console.log('Video started playing');
    }).catch(function(error) {
        // Error al iniciar la reproducción del video
        console.error('Video playback error:', error);
    });
}

// Inicia el video automáticamente
startVideo();
