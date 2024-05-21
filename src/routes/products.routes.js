import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/productos", getProducts);

router.get("/producto/:id", getProduct);

router.post("/producto", createProduct);

router.put("/producto/:id", updateProduct);

router.delete("/producto/:id", deleteProduct);

export default router;



