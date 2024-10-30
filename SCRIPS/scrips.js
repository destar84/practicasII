//busqueda
function toggleAdvancedSearch() 
{
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
function buscar() 
{
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


//prestamos
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('IngDatos');
    const table = document.getElementById('Datos');
    const btnEliminar = document.getElementById('btneliminar');
    const datosBody = document.getElementById('DatosBody');

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores 
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const celular = document.getElementById('celular').value;
        const entrega = document.getElementById('entrega').value;
        const devolucion = document.getElementById('devolucion').value;

        // Crear una nueva fila y los datos
        const newRow = datosBody.insertRow();

        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${celular}</td>
            <td>${entrega}</td>
            <td>${devolucion}</td>
        `;

        // Limpiar los campos del formulario
        form.reset();
    });

    // Manejar la eliminación de filas
    function Eliminar() {
        btnEliminar.addEventListener('click', () => {
            const rows = datosBody.getElementsByTagName('tr');

            // Recorremos las filas de la tabla
            for (let i = rows.length - 1; i >= 0; i--) {
                const row = rows[i];
                // Verificar si la fila está seleccionada
                if (row.classList.contains('selected')) {
                    datosBody.deleteRow(i); // Eliminar la fila
                }
            }
        });
    }

    // Hacer clic en una fila para seleccionarla
    datosBody.addEventListener('click', (event) => {
        const target = event.target.closest('tr');
        if (target) {
            // Alternar la clase "selected" para destacar la fila
            target.classList.toggle('selected');
        }
    });
});

// Función para mostrar u ocultar los datos
function mostrarDatos() {
    const form = document.getElementById('IngDatos');
    const datosTable = document.getElementById('Datos');
    const btnMostrar = document.getElementById('btnMostrar');

    // Alternar visibilidad
    if (datosTable.style.display === "none" || datosTable.style.display === "") {
        form.style.display = "none"; // Ocultar el formulario
        datosTable.style.display = "table"; // Mostrar la tabla
        btnMostrar.textContent = "Ocultar Datos";
    } else {
        form.style.display = "flex"; // Mostrar el formulario
        datosTable.style.display = "none"; // Ocultar la tabla
        btnMostrar.textContent = "Mostrar Datos";
    }
}