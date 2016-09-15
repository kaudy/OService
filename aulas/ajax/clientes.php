<?php

$cliente['nome'] = "Joselito";
$cliente['cpf'] = "98765432100";
$cliente['telefone'] = "(41)9999-3333";
$cliente['sexo'] = "M";
$cliente['datanasc'] = "03/03/1944";

$tabela[] = $cliente;

$cliente['nome'] = "Maria";
$cliente['cpf'] = "98765432100";
$cliente['telefone'] = "(41)9999-3333";
$cliente['sexo'] = "M";
$cliente['datanasc'] = "03/03/1944";

$tabela[] = $cliente;

echo json_encode($tabela);


