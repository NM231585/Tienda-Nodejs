import express from 'express';
import cors from 'cors';
import { prisma } from './config/db.js';
import path from 'path';
import authRoutes from './routes/Auth.routes.js';
import productRoutes from './routes/Product.routes.js';
import categoryRoutes from './routes/Category.routes.js';

const app = express();

// Configurar CORS
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Configurar Express para recibir JSON
app.use(express.json());

// Configurar puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
const startServer = async () => {
    try {
        await prisma.$connect();
        console.log("Conexión a la base de datos exitosa");

        app.listen(PORT, () => {
            console.log(`Servidor API corriendo en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos", error);
        process.exit(1);
    }
}

startServer();

//Volver pública la carpeta uploads
app.use("/uploads", express.static(path.resolve("uploads")));

//Importar rutas
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);