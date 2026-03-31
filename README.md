# Tienda E-commerce - Plataforma web
Plataforma web para la gestión de productos y ventas.

## Estructura del proyecto

```
Tienda/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── App.js
    └── package.json
```

## Tecnologías

- Node.js
- Express
- Prisma
- MariaDB
- React
- Vite
- Tailwind CSS

## Requisitos previos

- Node.js
- XAMPP con MariaDB
- Puerto 3306 para MariaDB
- Puerto 5000 para Express
- Puerto 5173 para React

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

## Seguridad

- bycrpt para encriptar contraseñas
- jwt para autenticación
- cors para permitir peticiones desde diferentes dominios
- dotenv para manejar variables de entorno

## Licencia

Este proyecto es de código abierto y puede ser utilizado por cualquier persona.

## Autor

- [Michael Noyola]
