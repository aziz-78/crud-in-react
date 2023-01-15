<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-headers: *');
$pdo = new PDO("mysql:host=localhost;port=3306;dbname=login","root","");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$id = $_GET["id"];
$statement = $pdo->prepare("SELECT * from second_login WHERE id = :id");
$statement->bindValue(':id', $id);
$statement->execute();
$result = $statement->fetch(PDO::FETCH_ASSOC);
echo json_encode($result);