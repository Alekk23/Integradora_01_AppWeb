barcos.forEach(function(barco) {
    var marker = L.marker([barco.lat, barco.lon], {icon: barcoIcono}).addTo(map)
        .bindPopup(barco.name);

    marker.on('click', function() {
        var listaDiv = document.getElementById('lista-barcos');
        listaDiv.innerHTML = '';

        var header = document.createElement('h3');
        header.textContent = 'Productos en ' + barco.name;
        listaDiv.appendChild(header);

        if (barco.products.length > 0) {
            barco.products.forEach(function(product) {
                var listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = product;
                listaDiv.appendChild(listItem);
            });
        } else {
            var noProductsItem = document.createElement('li');
            noProductsItem.classList.add('list-group-item');
            noProductsItem.textContent = 'No hay productos disponibles';
            listaDiv.appendChild(noProductsItem);
        }
    });
});
