import { Request, Response } from "express";
import db from "../models/index.js";
import AbstractModel from "../abstract/model.abstract.js";

class TransactionController extends AbstractModel {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await db.Transaction.findAll();
      console.log("transaction: ", transactions);

      res.json({
        status: "success",
        message: "transactions fetched successfully",
        data: transactions,
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
      const transaction = await db.Transaction.findByPk(req.params.id);
      if (!transaction) {
        res.json({
          message: "transaction not found",
          status: "error",
        });
        return;
      }
      res.json({
        status: "success",
        message: "transaction fetched successfully",
        data: transaction,
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
      res.json({
        status: "success",
        message: "User updated successfully",
        data: "",
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

export default new TransactionController();
