import { Router } from "express";
import { getCategories, getCategoriesId, createCategory, updateCategory, deleteCategory } from "../controllers/Category.controller.js";

const router = Router();

router.get("/get", getCategories);
router.get("/get/:id", getCategoriesId);
router.post("/create", createCategory);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;