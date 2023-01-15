<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-headers: *');
$pdo = new PDO("mysql:host=localhost;port=3306;dbname=login","root","");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$statement = $pdo->prepare("SELECT * from second_login");
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);