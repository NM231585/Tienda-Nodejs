import { prisma } from "../config/db.js";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/*
    @desc: Registrar un nuevo usuario
    @route: POST /api/auth/register
    @access: Public
*/
export const register = async (req, res) => {
    try {
        const { name, email, phone, password, departamento, municipio, rolId } = req.body;
        const existingUser = await prisma.usuario.findUnique({
            where: { correo: email }
        });
        if (existingUser) {
            return res.status(400).json({ message: "El correo ya está registrado" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const Newuser = await prisma.usuario.create({
            data: {
                nombre: name,
                correo: email,
                telefono: phone,
                password: hashedPassword,
                departamento: departamento || null,
                municipio: municipio || null,
                rolId: parseInt(rolId)
            }
        });
        res.status(201).json({ message: "Usuario creado exitosamente", Newuser });
    } catch (error) {
        errorHandler(res, error, "Error al registrar el usuario", 500);
    }
}

/*
    @desc: Iniciar sesión
    @route: POST /api/auth/login
    @access: Public
*/
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.usuario.findUnique({
            where: { correo: email }
        });
        if (!user) {
            return res.status(404).json({ message: "Credenciales inválidas o usuario no encontrado" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id: user.id, rolId: user.rolId }, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "24h" });
        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            token,
            user: {
                id: user.id,
                nombre: user.nombre,
                correo: user.correo,
                telefono: user.telefono,
                departamento: user.departamento,
                municipio: user.municipio,
                rolId: user.rolId
            }
        });
    } catch (error) {
        errorHandler(res, error, "Error al iniciar sesión", 500);
    }
};