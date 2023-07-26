<?php
// Conexión a la base de datos
$servername = "185.211.7.138:3306";
$username = "u611396439_biblioteca"; // Cambiar por tu usuario de MySQL
$password = "Biblioteca2023."; // Cambiar por tu contraseña de MySQL
$dbname = "u611396439_biblioteca2023";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre_libro = $_POST["nombre_libro"];
$autor = $_POST["autor"];
$editorial = $_POST["editorial"];
$isbn = $_POST["isbn"];
$disponibilidad = $_POST["disponibilidad"];

// Insertar los datos en la tabla "stock"
$sql = "INSERT INTO stock (libros, autor, editorial, isbn, disponibilidad)
        VALUES ('$nombre_libro', '$autor', '$editorial', '$isbn', '$disponibilidad')";

if ($conn->query($sql) === TRUE) {
    echo "Libro agregado correctamente a la base de datos.";
} else {
    echo "Error al agregar el libro: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
