import {Router} from "express";
import upload from "../middlewares/Upload.middleware.js";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/Product.controller.js";

const router = Router();

router.get("/get", getProducts);
router.get("/get/:id", getProductById);
router.post("/create", upload.single("image"), createProduct);
router.put("/update/:id", upload.single("image"), updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;