import db from "../models/index.js";
import jwt from "jsonwebtoken";
class CartController {
    async getByUserId(req, res) {
        try {
            const carts = await db.Cart.findAll({
                where: {
                    userId: req.params.userId,
                },
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: {
                    model: db.Product,
                    attributes: ["productId", "name", "price"],
                    as: "product",
                },
            });
            const totalPrice = carts.reduce((sum, cart) => sum + cart.totalPrice, 0);
            if (!carts || carts.length === 0) {
                res.status(404).json({
                    status: "error",
                    message: "User did't have any cart",
                });
                return;
            }
            res.json({
                status: "success",
                message: "Product fetched successfully",
                data: {
                    carts: carts,
                    totalPrice: totalPrice,
                },
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async addToCart(req, res) {
        try {
            const token = req.cookies.token;
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            let userid = "";
            if (typeof decoded === "object" && decoded !== null) {
                const encodedPayload = decoded.___;
                const userData = JSON.parse(Buffer.from(encodedPayload, "base64").toString("utf-8"));
                userid = userData.id;
            }
            await db.Cart.create({
                userId: userid,
                productId: req.body.productId,
                qty: req.body.qty,
                totalPrice: req.body.totalPrice,
            });
            res.json({
                status: "success",
                message: "Product added to cart successfully",
                data: req.body,
            });
        }
        catch (error) {
            console.log("ga bisa:", error.message);
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
}
export default new CartController();
