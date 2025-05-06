
import express from "express";
import ProductController from "../controllers/product.controller.js";
import { authenticate } from "../middlewares/authenticate.js";
const router = express.Router();

router.get("/", authenticate, ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
