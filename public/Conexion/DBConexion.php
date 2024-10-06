<?php
$host = 'localhost'; // Use the container name
$usuario = 'root';  // Ajusta esto según tu usuario MySQL
$password = '123456'; // Ajusta esto según tu contraseña
$dbname = 'mydb';
$port = 3306; // Puerto como entero, sin comillas

// Conexión a MySQL
$conn = mysqli_connect($host, $usuario, $password, $dbname, $port);


?>
