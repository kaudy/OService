<?php

require_once 'config.php';

$usuario    =$_POST['usuario'];
$senha      =sha1($_POST['senha'].$salt);

$query = "SELECT * FROM usuarios WHERE login='$usuario' AND senha='$senha'";


$resultado = $db->query($query)->fetchAll(PDO::FETCH_ASSOC);

if(count($resultado)>0)
{
    //usuario logado
    $_SESSION['usuario'] = $resultado[0];
    echo '{"status":"ok", "tipo":"'.$_SESSION['usuario']['tipo'].'"}';    
}else
{
    //usuario ou senha invalidos
    echo '{"status":"erro",'
       . '"msg":"Usuário ou senha incorretos"}';
}


