import db from "../models/index.js";
import AbstractModel from "../abstract/model.abstract.js";
class ProductController extends AbstractModel {
    async getAll(req, res) {
        try {
            const products = await db.Product.findAll({
                include: {
                    model: db.Category,
                    attributes: ["name"],
                    as: "category",
                },
            });
            const formattedProducts = products.map((product) => {
                const plainProduct = product.get({ plain: true });
                return {
                    ...plainProduct,
                    category: plainProduct.category?.name || null,
                };
            });
            res.json({
                status: "success",
                message: "Product fetched successfully",
                data: formattedProducts,
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async getById(req, res) {
        try {
            const product = await db.Product.findByPk(req.params.id);
            if (!product) {
                res.json({
                    message: "Product not found",
                    status: "error",
                });
                return;
            }
            res.json({
                status: "success",
                message: "User fetched successfully",
                data: product,
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async create(req, res) {
        try {
            await db.Product.create(req.body, {
                attributes: { exclude: ["createdAt", "updatedAt"] },
            });
            res.json({
                status: "success",
                message: "Product created successfully",
                data: req.body,
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            /** cara 1 */
            const user = await db.Product.update({ ...req.body }, { where: { id } });
            /** cara 2 */
            // let user = await db.User.findByPk(id);
            // console.log(user);
            // if (!user) {
            //     res.json({
            //         status: "error",
            //         message: "User not found",
            //     });
            // }
            // user.fullname = req.body.fullname;
            // user.username = req.body.username;
            // user.password = req.body.password;
            // user.phoneNumber = req.body.phoneNumber;
            // user.email = req.body.email;
            // user.active = req.body.active;
            // user.data = req.body.data;
            // await user.save();
            res.json({
                status: "success",
                message: "User updated successfully",
                data: user,
            });
        }
        catch (error) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            await db.Product.destroy({
                where: {
                    id,
                },
            });
            res.json({
                status: "success",
                message: "Product deleted successfully",
                data: id,
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
export default new ProductController();
