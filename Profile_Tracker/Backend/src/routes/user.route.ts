import express from "express";
import UserController from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/verifyToken.middleware.js";
const router = express.Router();

router.get("/", protectRoute, UserController.getUser);
router.put("/", protectRoute, UserController.updateUserProfile);

export default router;
