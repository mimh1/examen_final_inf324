<?php
	/*
		Web Service RESTful en PHP con MySQL (CRUD)
		Marko Robles
		Códigos de Programación
	*/
	include 'conexion.php';
	
	$pdo = new Conexion();
	
	//Listar registros y consultar registro
	if($_SERVER['REQUEST_METHOD'] == 'GET'){
		if(isset($_GET["id"])){
			$sqlp = "SELECT * FROM alumno where id=:id";
			$sql = $pdo->prepare($sqlp);
			$sql->bindValue(':id',$_GET["id"]);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			header("HTTP/1.1 200 hay datos");
			//echo $sql;
			echo json_encode($sql->fetchAll());
			exit;
		}else{
			$sqlp = "SELECT * FROM alumno";
			$sql = $pdo->prepare($sqlp);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			header("HTTP/1.1 200 hay datos");
			echo json_encode($sql->fetchAll());
			exit;
		}
					
	}
	
	//Insertar registro
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{		$sqlp = "INSERT INTO alumno (CI, nombre, apepaterno, apematerno, fechaNaci, telefono) VALUES (:CI, :nombre, :apepaterno, :apematerno, :fechaNaci, :telefono)";
			$sql = $pdo->prepare($sqlp);
			$sql->bindValue(':CI', $_GET["CI"]);
			$sql->bindValue(':nombre', $_GET["nombre"]);
			$sql->bindValue(':apepaterno', $_GET["apepaterno"]);
			$sql->bindValue(':apematerno', $_GET["apematerno"]);
			$sql->bindValue(':fechaNaci', $_GET["fechaNaci"]);
			$sql->bindValue(':telefono', $_GET["telefono"]);
			$sql->execute();
			$sql->setFetchMode(PDO::FETCH_ASSOC);
			header("HTTP/1.1 200 hay datos");
			echo json_encode("realizado");
			exit;
	}
	
	//actualiza registros
	if($_SERVER['REQUEST_METHOD'] == 'PUT')
	{	$sqlp = "UPDATE alumno SET CI=:CI, nombre=:nombre, apepaterno=:apepaterno, apematerno=:apematerno, fechaNaci=:fechaNaci, telefono=:telefono WHERE id=:id";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':id', $_GET["id"]);
		$sql->bindValue(':CI', $_GET["CI"]);
		$sql->bindValue(':nombre', $_GET["nombre"]);
		$sql->bindValue(':apepaterno', $_GET["apepaterno"]);
		$sql->bindValue(':apematerno', $_GET["apematerno"]);
		$sql->bindValue(':fechaNaci', $_GET["fechaNaci"]);
		$sql->bindValue(':telefono', $_GET["telefono"]);
		$sql->execute();
		echo json_encode("realizado");
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	//eliminar registro
	if($_SERVER['REQUEST_METHOD'] == 'DELETE')
	{
		$sqlp = "delete from alumno where id=:id";
		$sql = $pdo->prepare($sqlp);
		$sql->bindValue(':id', $_GET["id"]);
		//$sql->bindValue(':nombre', $_GET["nombre"]);
		$sql->execute();
		echo json_encode('eliminado');
		header("HTTP/1.1 200 ejecucion correcta");
		exit;
	}
	
	header("HTTP/1.1 400 Bad Request");
?>