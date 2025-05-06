import db from "../models/index.js";
class CategoryController {
    async getAll(req, res) {
        try {
            const categories = await db.Category.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"], },
                include: {
                    model: db.Product,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                    as: "products",
                },
            });
            res.json({
                status: "success",
                message: "Product fetched successfully",
                data: categories,
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
}
export default new CategoryController();
