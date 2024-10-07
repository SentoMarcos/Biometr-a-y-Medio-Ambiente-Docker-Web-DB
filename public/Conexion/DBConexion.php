<?php
/**
 * @file DBConexion.php
 * @brief Archivo de conexión a la base de datos
 * @details Este archivo contiene la conexión a la base de datos MySQL
 * @version 1.0
 * @param string $host Nombre del host de la base de datos
 * @param string $usuario Nombre del usuario de la base de datos
 * @param string $password Contraseña del usuario de la base de datos
 * @param string $dbname Nombre de la base de datos
 * @param int $port Puerto de la base de datos
 **/
$host = 'localhost'; // Use the container name
$usuario = 'root';  // Ajusta esto según tu usuario MySQL
$password = '123456'; // Ajusta esto según tu contraseña
$dbname = 'mydb';
$port = 3306; // Puerto como entero, sin comillas

// Conexión a MySQL
$conn = mysqli_connect($host, $usuario, $password, $dbname, $port);


?>
