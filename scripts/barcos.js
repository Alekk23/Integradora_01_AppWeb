var barcoIcono = L.icon({
    iconUrl: '/assets/ship.png',
    iconSize:     [20, 20], 
  });
var barcos = [
    { lat: 36.272148, lon: -4.449920, name: 'Barco 1' },
    { lat: 36.535273, lon: -2.578121, name: 'Barco 2' },
    { lat: 36.023687, lon: -5.212743, name: 'Barco 3' },
    { lat: 35.586991, lon: -4.533254, name: 'Barco 4' },
    { lat: 35.325914, lon: -2.520429, name: 'Barco 5' },
    { lat: 35.717211, lon: -2.866583, name: 'Barco 6' },
    { lat: 35.868000, lon: -1.385810, name: 'Barco 7' },
    { lat: 36.313481, lon: -0.635808, name: 'Barco 8' },
    { lat: 36.679356, lon: -1.603760, name: 'Barco 9' },
    { lat: 37.247884, lon: -1.142220, name: 'Barco 10' }
];

barcos.forEach(function(barco) {
    L.marker([barco.lat, barco.lon], {icon: barcoIcono}).addTo(map)
        .bindPopup(barco.name); 
});