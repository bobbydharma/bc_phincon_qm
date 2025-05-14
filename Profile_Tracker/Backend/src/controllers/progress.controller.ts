import { Request, Response } from "express";
import progressService from "../services/progress.service.js";

class ProgressController {
  async getProgress(req: Request, res: Response): Promise<void> {
    try {
      const progress = await progressService.getProgress((req as any).user.id);

      if (progress) {
        res.status(200).json({
          data: { progress: progress},
          message: "success",
        });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "internal server error: " + error.message });
    }
  }
}

export default new ProgressController();
