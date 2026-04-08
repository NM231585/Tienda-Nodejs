import { prisma } from "../config/db.js";
import { errorHandler } from "../Utils/errorHandler.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await prisma.categoria.findMany();
        res.status(200).json({ success: true, categories });
    } catch (error) {
        errorHandler(res, error, "Error al obtener las categorías", 500);
    }
}

export const getCategoriesId = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await prisma.categoria.findUnique({ where: { id: parseInt(id) } });
        res.status(200).json({ success: true, category });
    } catch (error) {
        errorHandler(res, error, "Error al obtener la categoría", 500);
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = await prisma.categoria.create({ 
            data: { 
                nombre: name,
                descripcion: description 
            } 
        });
        res.status(201).json({ message: "Categoría creada exitosamente", newCategory: category });
    } catch (error) {
        errorHandler(res, error, "Error al crear la categoría", 500);
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const category = await prisma.categoria.update({ 
            where: { id: parseInt(id) }, 
            data: { 
                nombre: name,
                descripcion: description 
            } 
        });
        res.status(200).json({ success: true, category });
    } catch (error) {
        errorHandler(res, error, "Error al actualizar la categoría", 500);
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await prisma.categoria.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ success: true, category });
    } catch (error) {
        errorHandler(res, error, "Error al eliminar la categoría", 500);
    }
}