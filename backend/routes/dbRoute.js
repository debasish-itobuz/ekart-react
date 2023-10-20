import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { createCategory, getCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-products", getAllProducts);
router.post("/create-category", createCategory);
router.get("/get-all-category", getCategory);


export default router;
