// JavaScript - cargar.js
$(document).ready(function () {
    // Escucha el evento submit del formulario
    $("#formCargarLibro").submit(function (e) {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Obtiene los valores ingresados por el usuario
        const nombre_libro = $("#nombre_libro").val();
        const autor = $("#autor").val();
        const editorial = $("#editorial").val();
        const isbn = $("#isbn").val();
        const disponibilidad = $("#disponibilidad").val();

        console.log("Nombre del libro:", nombre_libro);
        console.log("Autor:", autor);
        console.log("Editorial:", editorial);
        console.log("ISBN:", isbn);
        console.log("Disponibilidad:", disponibilidad);

        // Envía los datos al archivo PHP usando AJAX
        $.ajax({
            type: "POST",
            url: "agregarstock.php",
            data: {
                nombre_libro: nombre_libro,
                autor: autor,
                editorial: editorial,
                isbn: isbn,
                disponibilidad: disponibilidad
            },
            success: function (response) {
                // Muestra el mensaje de éxito en el div resultadoConsulta
                $("#resultadoConsulta").html(response);
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});
