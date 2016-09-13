<?php

require_once 'config.php';

$num = $_GET['num'];

$query = 'select * from os WHERE numero='.$num;

$resultado = $db->query($query);

$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);













