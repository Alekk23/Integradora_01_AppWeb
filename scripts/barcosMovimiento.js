function moveMarker(marker, startPosition, endPosition, duration) {
    var startTime = new Date().getTime();
    
    function animateMarker() {
      var elapsedTime = new Date().getTime() - startTime;
      var progress = Math.min(elapsedTime / duration, 1); // Progreso entre 0 y 1
  
      // Interpolación de la latitud y longitud
      var currentLat = startPosition[0] + (endPosition[0] - startPosition[0]) * progress;
      var currentLng = startPosition[1] + (endPosition[1] - startPosition[1]) * progress;
  
      marker.setLatLng([currentLat, currentLng]);
  
      if (progress < 1) {
        requestAnimationFrame(animateMarker); // Repite hasta completar el movimiento
      }
    }
  
    animateMarker();
  }
  

var marker = L.marker([35.7112276,-0.7207653]).addTo(map); // Posición inicial del barco
var newDestination = [36.8415897,-2.4984022]; // Nueva posición (lat, lng)
moveMarker(marker, [36.7183311, -4.5318402], newDestination, 5000); // Mueve el barco en 5 segundos