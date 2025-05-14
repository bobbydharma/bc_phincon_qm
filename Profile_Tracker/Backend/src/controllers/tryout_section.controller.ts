import { Request, Response } from "express";
import tryoutSectionService from "../services/tryout_section.service.js";
import formatDate from "../util/libs.js";

class TryoutSectionController {
  async getRuningTryout(req: Request, res: Response): Promise<void> {
    try {
      console.log("getRuningTryout ====>>",(req as any).user.id);
      const tryout = await tryoutSectionService.getRunningTryout((req as any).user.id);
      if (tryout) {
        const parsedTryout = tryout.runningTryout.map((course: any) => {
          const parsedData = JSON.parse(course.data);

          return {
            ...course,
            data: {
              ...parsedData,
              startDate: formatDate(parsedData.startDate),
              endDate: formatDate(parsedData.endDate),
            },
          };
        });

        res.status(200).json({
          data: {
            tryouts: parsedTryout,
            progressTryout: tryout.tryoutProgress,
          },
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

export default new TryoutSectionController();
