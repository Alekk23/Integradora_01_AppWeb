var barcoIcono = L.icon({
    iconUrl: '/assets/ship.png',
    iconSize:     [20, 20], 
  });
var barcos = [
    { lat: 36.272148, lon: -4.449920, name: 'Titanic', owner: 'Sir Francis', flag: '../assets/canada.png', folio: '1001001001', tipo: 'Carga' },
    { lat: 36.535273, lon: -2.578121, name: 'Santa María', owner: 'Fernando de Magallanes', flag: '../assets/chile.png', folio: '1001001002', tipo: 'Carga' },
    { lat: 36.023687, lon: -5.212743, name: 'HMS Victory', owner: 'James Cook', flag: '../assets/china.png', folio: '1001001003', tipo: 'Carga' },
    { lat: 35.586991, lon: -4.533254, name: 'La Niña', owner: 'Francis Drake', flag: '../assets/colombia.png', folio: '1001001004', tipo: 'Carga' },
    { lat: 35.325914, lon: -2.520429, name: 'La Pinta', owner: 'Vasco da Gama', flag: '../assets/france.png', folio: '1001001005', tipo: 'Carga' },
    { lat: 35.717211, lon: -2.866583, name: 'USS Constitution', owner: 'Bartolomé Díaz', flag: '../assets/germany.png', folio: '1001001006', tipo: 'Carga' },
    { lat: 35.868000, lon: -1.385810, name: 'Golden Hind', owner: 'Hernán Cortés', flag: '../assets/japan.png', folio: '1001001007', tipo: 'Carga' },
    { lat: 36.313481, lon: -0.635808, name: 'Mayflower', owner: 'Juan Sebastián Elcano', flag: '../assets/singapore.png', folio: '1001001008', tipo: 'Carga' },
    { lat: 36.679356, lon: -1.603760, name: 'Bismarck', owner: 'Roald Amundsen', flag: '../assets/united-kingdom.png', folio: '1001001009', tipo: 'Carga' },
    { lat: 37.247884, lon: -1.142220, name: 'Endurence', owner: 'Jacques Cousteau', flag: '../assets/united-states.png', folio: '1001001010', tipo: 'Carga' }
];

barcos.forEach(function(barco) {
    L.marker([barco.lat, barco.lon], {icon: barcoIcono}).addTo(map)
        .bindPopup(barco.name); 
});