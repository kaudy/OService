<?php

require_once 'config.php';

$data       = new DateTime();
$comentario = $_POST['comentario'];
$numero     = $_POST['num'];
$status     = $_POST['status'];

$query = "UPDATE os "
        . "SET data_alteracao = '".$data->format('Y-m-d H:i:s')."',"
        . " comentario='".$comentario."',"
        . " status='".$status."'"
        . " WHERE numero=".$numero;
//echo $query;

$resultado = $db->exec($query);

if($resultado>0)
{
    echo '{"status": "ok"}';
}else
{
    echo '{"status": "erro",'
        .'"msg":"Erro ao tentar alterar a OS" }';
}
