import express from "express";
import ProgressController from "../controllers/progress.controller.js";
import { protectRoute } from "../middleware/verifyToken.middleware.js";
const router = express.Router();
router.get("/", protectRoute, ProgressController.getProgress);
export default router;
