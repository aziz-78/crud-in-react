<?php
header('Access-Control-Allow-Origin: *');


header('Access-Control-Allow-methods: DELETE');

$pdo = new PDO("mysql:host=localhost;port=3306;dbname=login", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$path = explode('/', $_SERVER['REQUEST_URI']);
$sql = "DELETE FROM second_login WHERE Id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue('id', $path[3]);
$stmt->execute();
