
var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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

// Si es iOS, espera a que el usuario interactúe con la página para iniciar el video
if (isiOS) {
    document.body.addEventListener('touchstart', function() {
        startVideo();
    }, { once: true }); // Solo se activará una vez
} else {
    // En otros dispositivos, inicia el video automáticamente
    startVideo();
}
