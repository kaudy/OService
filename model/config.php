<?php
 session_name('os-login');
 session_start();
 
 $salt       ="Oservice666";
ini_set('display_errors', 1);
error_reporting(E_ALL);

$db = new PDO('sqlite:banco.sqllite');