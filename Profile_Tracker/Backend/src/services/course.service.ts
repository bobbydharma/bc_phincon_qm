import db from "../models/index.js";
import { QueryTypes } from "sequelize";

class CourseService {
  async getRunningCourse(userId: string) {
    try {
      const [runningCourses] = await db.sequelize.query(`
        SELECT *
        FROM courses
        WHERE JSON_UNQUOTE(JSON_EXTRACT(data, '$.startDate')) <= CURDATE()
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.endDate')) >= CURDATE()
      `);

      const result: { count: string }[] = await db.sequelize.query(
        `
        SELECT count(*) as count
        FROM exams
        WHERE userId = :userId
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.status')) IN ('submitted', 'completed')
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.courseId')) IN (:runningCourseIds)
        `,
        {
          replacements: {
            userId: userId,
            runningCourseIds: runningCourses.map((c: any) => c.id),
          },
          type: QueryTypes.SELECT,
        }
      );

      const completedCount = parseInt(result[0]?.count ?? 0);
      const courseProgress = (completedCount / runningCourses.length) * 100;
      return {runningCourses, courseProgress};
    } catch (error: any) {
      throw new Error("failed to get course:" + error.message);
    }
  }
}

export default new CourseService();
