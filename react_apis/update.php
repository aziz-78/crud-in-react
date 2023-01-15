<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-headers: *');
header('Access-Control-Allow-methods: *');

$pdo = new PDO("mysql:host=localhost;port=3306;dbname=login","root","");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$name = $data->name;
$password = $data->password;
$statement = $pdo->prepare("UPDATE second_login SET name = :name, password = :password WHERE id = :id");
$statement->bindValue(':name', $name);
$statement->bindValue(':password', $password);
$statement->bindValue(':id', $id);
$res = $statement->execute();
if($res){
    echo "successfully updated record";
}
else{
    echo "error";
}
