function toggleAdvancedSearch() {
    var advancedSearchDiv = document.getElementById('camposBusquedaAvanzada');
    var showAdvanced = document.getElementById('BusquedaAvanzada');

    // Cambiar la visibilidad y altura
    if (advancedSearchDiv.classList.contains('visible')) {
        advancedSearchDiv.classList.remove('visible');
        showAdvanced.innerHTML = 'Mostrar búsqueda avanzada ▼';
    } else {
        advancedSearchDiv.classList.add('visible');
        showAdvanced.innerHTML = 'Ocultar búsqueda avanzada ▲';
    }
}
function buscar() {
    // Obtener los valores de la búsqueda simple
    var simpleSearch = document.getElementById("simple-search").value;

    // Obtener los valores de los campos avanzados
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var tipoMaterial = document.getElementById("tipo-material").value;
    var genero = document.getElementById("genero").value;
    var editorial = document.getElementById("editorial").value;
    var nInventario = document.getElementById("n-inventario").value;
    var coleccion = document.getElementById("coleccion").value;
    var tema = document.getElementById("tema").value;
    var etiquetas = document.getElementById("etiquetas").value;

    // Simular una búsqueda y mostrar los resultados
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<p><strong>Resultados de la búsqueda:</strong></p>";

    // Aquí se puede agregar una lógica de búsqueda real
    if (simpleSearch || titulo || autor || tipoMaterial || genero || editorial || nInventario || coleccion || tema || etiquetas) {
        // Si hay un resultado, mostrarlo
        resultadosDiv.innerHTML += "<p><strong>Título:</strong> " + (titulo || "Libro Ejemplo") + "</p>" +
            "<p><strong>Autor:</strong> " + (autor || "Autor Ejemplo") + "</p>" +
            "<p><strong>Tipo de Material:</strong> " + (tipoMaterial || "Libro") + "</p>" +
            "<p><strong>Género:</strong> " + (genero || "Ficción") + "</p>" +
            "<p><strong>Editorial:</strong> " + (editorial || "Editorial Ejemplo") + "</p>" +
            "<p><strong>Nº de Inventario:</strong> " + (nInventario || "12345") + "</p>" +
            "<p><strong>Colección:</strong> " + (coleccion || "Colección Ejemplo") + "</p>" +
            "<p><strong>Tema:</strong> " + (tema || "Tema Ejemplo") + "</p>" +
            "<p><strong>Etiquetas:</strong> " + (etiquetas || "Etiqueta Ejemplo") + "</p>";
    } else {
        resultadosDiv.innerHTML += "<p>No se encontraron resultados.</p>";
    }
}