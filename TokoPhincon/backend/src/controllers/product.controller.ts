import { Request, Response } from "express";
import db from "../models/index.js";
import AbstractModel from "../abstract/model.abstract.js";

class ProductController extends AbstractModel {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await db.Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log("Test", products);
      res.json({
        status: "success",
        message: "Product fetched successfully",
        data: products,
      });
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
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
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      await db.Product.create(req.body, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log("ini testing", req.body);
      res.json({
        status: "success",
        message: "Product created successfully",
        data: req.body,
      });
    } catch (error: any) {
      console.log(error);
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
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
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
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
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }
}

export default new ProductController();
