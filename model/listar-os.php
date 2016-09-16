<?php

require_once 'config.php';

$filtro       ='';

//se usuario tiver a permissao de administrador lista todas as OS
if($_SESSION['usuario']['tipo']=='admin')
{
   
    if(isset($_GET['departamento']) && $_GET['departamento']!='Todos')
    {        
        $filtro .= " WHERE departamento ='".$_GET['departamento']."' ";       
    }
    
    if(isset($_GET['status']) && $_GET['status']!='Todos')
    {
       if($filtro=='')
        {
            $filtro = " WHERE status ='".$_GET['status']."' ";
        }else
        {
            $filtro .= " AND status ='".$_GET['status']."' ";
        }
    }
    
    if(isset($_GET['num']))
    {
       if($filtro=='')
        {
            $filtro = " WHERE numero like '".$_GET['num']."%' ";
        }else
        {
            $filtro .= " AND num like '".$_GET['num']."%' ";
        }
    }
    
    $query = "SELECT * FROM os ".$filtro."ORDER BY data DESC";
}else
{  
    //Caso seja usuario lista somente as suas os
    $query = "SELECT * FROM os WHERE solicitante='".$_SESSION['usuario']['nome']."' ORDER BY data DESC"; 
}

$resultado = $db->query($query);
$lista = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($lista);