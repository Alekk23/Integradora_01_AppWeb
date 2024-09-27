var puertoIcono = L.icon({
    iconUrl: '/assets/anchor.png',
  
    iconSize:     [35, 35], // size of the icon
  });

var puertos = [
    { lat: 36.7183311, lon: -4.5318402, name: 'Malaga' },
    { lat: 35.5851794, lon: -5.4490513, name: 'Tetouan' },
    { lat: 35.1652081, lon: -2.9789712, name: 'Melilla' },
    { lat: 36.8415897, lon: -2.4984022, name: 'Almeria' },
    { lat: 35.7112276, lon: -0.7207653, name: 'Sidi' },
];

// Crear marcadores para cada puerto y agregar eventos 'click'
puertos.forEach(function(puerto) {
    var marker = L.marker([puerto.lat, puerto.lon], {icon: puertoIcono}).addTo(map)
        .bindPopup(puerto.name);
    
    // Añadir el evento 'click' al marcador
    marker.on('click', function() {
        // Si ya hay un círculo dibujado, lo removemos
        if (circuloActivo) {
            map.removeLayer(circuloActivo);
        }

        // Crear un círculo de 50 km alrededor del marcador seleccionado
        circuloActivo = L.circle([puerto.lat, puerto.lon], {
            color: 'blue',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50000 // radio en metros (50 km)
        }).addTo(map);
    });
});

var circuloActivo = null;

