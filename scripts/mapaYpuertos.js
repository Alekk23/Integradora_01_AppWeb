var map = L.map('map').setView([36.0686459, -2.8215703], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var malagaPuerto = L.marker([36.7183311, -4.5318402]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var tetouanPuerto = L.marker([35.5851794,-5.4490513]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var melillaPuerto = L.marker([35.1652081,-2.9789712]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var almeriaPuerto = L.marker([36.8415897,-2.4984022]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var sidiPuerto = L.marker([35.7112276,-0.7207653]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
      