import express from "express";
import productRouter from "./product.route.js";
import categoryRouter from "./catergory.route.js";
import userRouter from "./user.route.js";
import transactionRouter from "./transaction.route.js";
import authRouter from "./auth.route.js";
const router = express.Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/users", userRouter);
router.use("/transactions", transactionRouter);
router.use("/auth", authRouter);

export default router;