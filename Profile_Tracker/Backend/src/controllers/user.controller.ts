import { Request, Response } from "express";
import userService from "../services/user.service.js";

class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUser((req as any).user.id);

      if (user) {
        res.status(200).json({
            data : user,
            message: "success",
        });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error: any) {
      throw new Error("failed to login:" + error.message);
    }
  }

  async updateUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const result = await userService.updateUserProfile((req as any).user.id, req.body);
  
      if (result.status === "success") {
        res.status(200).json({
          message: result.message,
        });
      } else {
        res.status(400).json({
          message: result.message,
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: "Internal server error: " + error.message,
      });
    }
  }
  
}

export default new UserController();
