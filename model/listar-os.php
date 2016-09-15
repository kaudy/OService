<?php

require_once 'config.php';

$query = "SELECT * FROM os WHERE solicitante='".$_SESSION['usuario']['nome']."' ORDER BY data DESC";

$resultado = $db->query($query);
$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);