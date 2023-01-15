<?php 

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-headers: *');
	$pdo = new PDO("mysql:host=localhost;port=3306;dbname=login", "root", "");
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$data = json_decode(file_get_contents("php://input"));

	$name = $data->name;
	$password = $data->password;

		$statement = $pdo->prepare("INSERT INTO second_login(name,password) VALUES(:name,:password)");
        $statement->bindValue(':name',$name);
        $statement->bindValue(':password',$password);
		$res = $statement->execute();
		if($res){
			echo ("success");
		}
		else{
			echo ("error");
		}
	}

	

?>
