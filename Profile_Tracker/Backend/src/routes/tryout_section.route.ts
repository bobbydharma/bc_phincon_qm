import express from "express";
import TryoutSectionController from "../controllers/tryout_section.controller.js";
import { protectRoute } from "../middleware/verifyToken.middleware.js";
const router = express.Router();

router.get("/", protectRoute, TryoutSectionController.getRuningTryout);

export default router;
