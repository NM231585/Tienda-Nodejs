# Backend API-REST - E-commerce
API REST para la plataforma de gestión de productos y ventas.

## Tecnologías
- Node.js
- Express
- Prisma
- MariaDB

## Requisitos Previsos
 - Node.js
 - XAMPP con MariaDB
 - Puerto 3306 para MariaDB
 - Puerto 5000 para Express

## Estructura del proyecto

```
src/
├── config/
│   └── db.js
├── controllers/
├── models/
├── routes/
└── server.js
```

---
## Comandos

```bash
# Inicializar proyecto
npm init -y

# Instalar dependencias
npm install express cors dotenv @prisma/client @prisma/adapter-mariadb mariadb

# Instalar dependencias de desarrollo
npm install -D prisma

# Crear base de datos
npx prisma migrate dev --name init

# Iniciar servidor
npm run dev
``` 

## Iniciar Servidor

```bash
# Iniciar servidor
npm run dev
```