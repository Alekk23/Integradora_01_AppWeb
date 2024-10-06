var map = L.map('map').setView([36.0686459, -2.8215703], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var paises = [
    {
        name: 'España', lat: 40.4380981, lon: -3.8446918,
        Salidas: [
            { barcoNombre: 'SS Divinia', Entrada: '02-12-2011', Salida: '21-01-2011' }
        ],
        icono: "../assets/espana.png"
    },
    {
        name: 'Marruecos', lat: 31.634741, lon: -8.0904269,
        Salidas: [
            { barcoNombre: 'SS Alhambra', Entrada: '15-03-2012', Salida: '25-03-2012' },
            { barcoNombre: 'SS Marrakech', Entrada: '10-04-2013', Salida: '20-04-2013' }
        ],
        icono: "../assets/marruecos.png"
    },
    {
        name: 'Argelia', lat: 28.2709371, lon: 2.1806022,
        Salidas: [
            { barcoNombre: 'SS Sahara', Entrada: '01-05-2014', Salida: '15-05-2014' },
            { barcoNombre: 'SS Orán', Entrada: '12-06-2015', Salida: '22-06-2015' }
        ],
        icono: "../assets/argelia.png"
    }
];

paises.forEach(function (pais) {
    var iconoPais = L.icon({
        iconUrl: pais.icono,
        iconSize: [50, 50]
    });
    var marker = L.marker([pais.lat, pais.lon], { icon: iconoPais }).addTo(map);

    marker.on('click', function () {
        var listaDiv = document.getElementById('lista-barcos');
        listaDiv.innerHTML = '';

        var header = document.createElement('h3');
        header.textContent = pais.name;
        listaDiv.appendChild(header);

        pais.Salidas.forEach(function (salida) {
            var listItem = document.createElement('li');
            listItem.classList.add('list-group-item');

            listItem.appendChild(document.createTextNode(salida.barcoNombre));
            listItem.appendChild(document.createElement('br'));
            listItem.appendChild(document.createTextNode('Entrada: ' +  salida.Entrada));
            listItem.appendChild(document.createElement('br'));
            listItem.appendChild(document.createTextNode('Salida: ' +  salida.Salida));

            listaDiv.appendChild(listItem);
        });

    });
});
