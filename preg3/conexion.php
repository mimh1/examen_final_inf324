<?php
	/*
		Clase de conexión a MySQL con PDO
		Marko Robles
		Códigos de Programación
	*/
	class Conexion extends PDO
	{
		private $host = 'localhost';
		private $name = 'p2';
		private $user = 'inf324';
		private $password = '123456';
		
		public function __construct()
		{
			try{
				parent::__construct('mysql:host=' . $this->host . ';dbname=' . $this->name . ';charset=utf8', $this->user, $this->password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
				
				} catch(PDOException $e){
				echo 'Error: ' . $e->getMessage();
				exit;
			}
		}
	}
?>


