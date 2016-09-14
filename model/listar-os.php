<?php

require_once 'config.php';

$query = 'SELECT * FROM os ORDER BY data DESC';

$resultado = $db->query($query);

$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);













