import express from "express";
import cartRoute from "./cart.route.js"
import cartController from "../controllers/cart.controller.js";
import {authenticate} from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/cart", cartRoute);
router.post("/cart/", authenticate, cartController.addToCart);

export default router;
