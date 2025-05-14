import { Request, Response } from "express";
import courseService from "../services/course.service.js";
import formatDate from "../util/libs.js";

class CourseController {
    async getRuningCourse(req: Request, res: Response): Promise<void> {
      try {
        const courses = await courseService.getRunningCourse((req as any).user.id);
        if (courses) {
          const parsedCourses = courses.runningCourses.map((course: any) => {
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
              courses: parsedCourses,
              progressCourse: courses.courseProgress
            },
            message: "success",
          });
        } else {
          res.status(404).json({ message: "not found" });
        }
      } catch (error: any) {
        throw new Error("failed to login:" + error.message);
      }
    }
}

export default new CourseController();
