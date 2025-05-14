import express from "express";
import ProfileController from "../controllers/profile.controller.js";
import { protectRoute } from "../middleware/verifyToken.middleware.js";
const router = express.Router();

router.get("/", protectRoute ,ProfileController.getProfile);

export default router;
