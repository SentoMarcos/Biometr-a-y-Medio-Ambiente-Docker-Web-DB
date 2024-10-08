<?php
// obtener mediciones
require_once '../Conexion/DBConexion.php';
global $conn;

$sql = "SELECT * FROM medidas ORDER BY id DESC LIMIT 10";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $mediciones = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $mediciones[] = $row;
    }
    echo json_encode($mediciones);
} else {
    echo "0 results";
}
?>