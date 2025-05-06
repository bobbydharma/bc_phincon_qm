import { Request, Response } from "express";
import db from "../models/index.js";

class CategoryController {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const categories = await db.Category.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"],}, 
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
    } catch (error: any) {
      res.json({
        status: "error",
        message: error.message,
      });
    }
  }
}

export default new CategoryController();
