import express from "express";
import CourseController from "../controllers/course.controller.js";
import { protectRoute } from "../middleware/verifyToken.middleware.js";
const router = express.Router();
router.get("/", protectRoute, CourseController.getRuningCourse);
export default router;
