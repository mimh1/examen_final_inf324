CREATE DATABASE p2;

-- Usar la base de datos
USE p2;

-- Crear la tabla personaid
CREATE TABLE alumno(
    id INT PRIMARY KEY IDENTITY(1,1),
    CI INT,
    nombre NVARCHAR(255),
    apepaterno NVARCHAR(255),
    apematerno NVARCHAR(255),
    fechaNaci NVARCHAR(255),
    telefono NVARCHAR(255)
);


