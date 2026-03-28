--lógica del servidor para E-commerce

--Creación de la base de datos
CREATE DATABASE IF NOT EXISTS Tienda_DB;
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

--Usar la base de datos
USE Tienda_DB;

--Crear tabla de roles
CREATE TABLE IF NOT EXISTS roles(
    id int AUTO_INCREMENT primary key,
    nombre ENUM('user', 'admin') Not null unique,
    descripcion varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--Insertar roles iniciales
INSERT INTO roles (nombre, descripcion) VALUES 
('user', 'Usuario, cliente que mira y solicita productos.'),
('admin', 'Administrador de la página, observa datos y usuarios.')
ON DUPLICATE KEY UPDATE descripcion=VALUES(descripcion);

--Creacón de la tabla de datos de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id int AUTO_INCREMENT primary key,
    nombre varchar(50) Not null,
    correo varchar(100) not null unique,
    telefono varchar(20) not null,
    password varchar(255) not null,
    departamento varchar(100),
    municipio varchar(100),
    rol_id int not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (rol_id) references roles(id) ON DELETE RESTRICT
);

--Crear la tabla de Categorias
CREATE TABLE IF NOT EXISTS categorias (
    id int AUTO_INCREMENT primary key,
    nombre varchar(100) Not null,
    descripcion varchar(255) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--Crear la tabla de productos
CREATE TABLE IF NOT EXISTS productos (
    id int AUTO_INCREMENT primary key,
    nombre varchar(100) Not null,
    categoria_id int not null,
    descripcion varchar(255) not null,
    precio decimal(10,2) not null,
    stock int,
    imagen varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) references categorias(id) ON DELETE RESTRICT
);

--Crear la tabla de pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id int AUTO_INCREMENT primary key,
    usuario_id int not null,
    total decimal(10,2) not null,
    estado ENUM('pendiente', 'pagado', 'enviado', 'cancelado') not null,
    stripe_session_id varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) references usuarios(id) ON DELETE RESTRICT
);

--Crear la tabla de ordenes
CREATE TABLE IF NOT EXISTS orden_items (
    id int AUTO_INCREMENT primary key,
    pedido_id int not null,
    producto_id int not null,
    cantidad int,
    precio_unitario decimal(10,2) not null,
    fecha datetime,
    FOREIGN KEY (pedido_id) references pedidos(id) ON DELETE RESTRICT,
    FOREIGN KEY (producto_id) references productos(id) ON DELETE RESTRICT
);