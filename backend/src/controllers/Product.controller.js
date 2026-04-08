import { prisma } from "../config/db.js";
import { errorHandler } from "../Utils/errorHandler.js";



//Módulo para obtener todos los productos de la base de datos
export const getProducts = async (req, res) => {
    try {
        const products = await prisma.producto.findMany();
        res.status(200).json({ success: true, products });
    } catch (error) {
        errorHandler(res, error, "Error al obtener los productos", 500);
    }
}

//Módulo para obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.producto.findUnique({ where: { id: parseInt(id) } });
        res.status(200).json({ success: true, product });
    } catch (error) {
        errorHandler(res, error, "Error al obtener el producto", 500);
    }
}

//Módulo para crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const { name, id_category, description, price, stock} = req.body;
        const product = await prisma.producto.create({
            data: { nombre: name,
                categoriaId: parseInt(id_category),
                descripcion: description,
                precio:parseFloat(price),
                stock:parseInt(stock),
                imagen: "" }
        });
        res.status(201).json({ message: "Producto creado exitosamente", newProduct: product });
    } catch (error) {
        errorHandler(res, error, "Error al crear el producto", 500);
    }
}

//Módulo para actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        const product = await prisma.producto.update({ 
            where: { id: parseInt(id) },
            data: { nombre: name,
                precio: parseFloat(price),
                descripcion: description } 
        });
        res.status(200).json({ success: true, product });
    } catch (error) {
        errorHandler(res, error, "Error al actualizar el producto", 500);
    }
}

//Módulo para eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.producto.delete({ where: { id: parseInt(id) } });
        res.status(200).json({ success: true, product });
    } catch (error) {
        errorHandler(res, error, "Error al eliminar el producto", 500);
    }
}