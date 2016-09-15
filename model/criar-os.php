<?php

require_once 'config.php';

$solicitante = $_SESSION['usuario']['nome'];
$departamento =$_POST['departamento'];
$solicitacao = $_POST['solicitacao'];

$data = new DateTime();
$status = 'Nova';

$query = "INSERT INTO os (solicitante, data, departamento, status, solicitacao)".
         "VALUES ('$solicitante','".$data->format('Y-m-d H:i:s')."','$departamento','$status','$solicitacao')";

$resultado = $db->exec($query);

if($resultado>0)
{
    echo '{"status": "ok"}';
}else
{
    echo '{"status": "erro",'
        .'"msg":"Erro ao tentar inserir a OS" }';
}
