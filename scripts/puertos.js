var puertoIcono = L.icon({
    iconUrl: '/assets/anchor.png',
  
    iconSize:     [35, 35], 
  });

var puertos = [
    { lat: 36.7183311, lon: -4.5318402, name: 'Malaga' },
    { lat: 35.5851794, lon: -5.4490513, name: 'Tetouan' },
    { lat: 35.1652081, lon: -2.9789712, name: 'Melilla' },
    { lat: 36.8415897, lon: -2.4984022, name: 'Almeria' },
    { lat: 35.7112276, lon: -0.7207653, name: 'Sidi' },
];

var barcosCercanos = [];

puertos.forEach(function(puerto) {
    var marker = L.marker([puerto.lat, puerto.lon], {icon: puertoIcono}).addTo(map)
        .bindPopup(puerto.name);
    
    marker.on('click', function() {
        if (circuloActivo) {
            map.removeLayer(circuloActivo);
        }

        circuloActivo = L.circle([puerto.lat, puerto.lon], {
            color: 'red',
            fillOpacity: 0.25,
            radius: 75000
        }).addTo(map);

        var bounds = circuloActivo.getBounds();

        barcosCercanos = [];

        barcos.forEach(function(barco) {
            var latlng = L.latLng(barco.lat, barco.lon);
            if (bounds.contains(latlng)) {
                barcosCercanos.push(barco.name);
            }
        });

        var listaDiv = document.getElementById('lista-barcos');
        listaDiv.innerHTML = '';

        barcosCercanos.forEach(function(nombreBarco) {
            var listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = nombreBarco;
            listaDiv.appendChild(listItem);
        });
    });
});

map.on('click', function() {
    if (circuloActivo) {
        map.removeLayer(circuloActivo);
        circuloActivo = null; 
    }
});

var circuloActivo = null;

