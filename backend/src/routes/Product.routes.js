import {Router} from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/Product.controller.js";

const router = Router();

router.get("/get", getProducts);
router.get("/get/:id", getProductById);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;