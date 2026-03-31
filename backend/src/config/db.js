import * as mariadb from 'mariadb';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/index.js';
import dotenv from 'dotenv';

dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tienda_db',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
});

const adapter = new PrismaMariaDb(pool);

// Exportamos nuestra instancia única del cliente Prisma
export const prisma = new PrismaClient({ adapter });
