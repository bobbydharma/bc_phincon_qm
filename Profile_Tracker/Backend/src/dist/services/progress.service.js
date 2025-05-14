import db from "../models/index.js";
import { QueryTypes } from "sequelize";
class ProgressService {
    async getProgress(userId) {
        try {
            const [runningCourses] = await db.sequelize.query(`
        SELECT id
        FROM courses
        WHERE JSON_UNQUOTE(JSON_EXTRACT(data, '$.startDate')) <= CURDATE()
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.endDate')) >= CURDATE()
      `);
            const [runningTryouts] = await db.sequelize.query(`
        SELECT id
        FROM tryout_sections
        WHERE JSON_UNQUOTE(JSON_EXTRACT(data, '$.startDate')) <= CURDATE()
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.endDate')) >= CURDATE()
      `);
            if (runningCourses.length === 0 && runningTryouts.length === 0) {
                return { progress: 0, timeSpentLearning: 0, courseCompleted: 0 };
            }
            const exams = await db.sequelize.query(`
        SELECT data
        FROM exams
        WHERE userId = :userId
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.status')) IN ('submitted', 'completed')
          AND (
            JSON_UNQUOTE(JSON_EXTRACT(data, '$.tryoutSectionId')) IN (:runningTryoutIds)
            OR JSON_UNQUOTE(JSON_EXTRACT(data, '$.courseId')) IN (:runningCourseIds)
          )
        `, {
                replacements: {
                    userId: userId,
                    runningTryoutIds: runningTryouts.map((t) => t.id),
                    runningCourseIds: runningCourses.map((c) => c.id),
                },
                type: QueryTypes.SELECT,
            });
            const courseCompleted = exams.length;
            const timeSpentLearning = exams.reduce((total, item) => {
                const parsed = JSON.parse(item.data);
                return total + (parsed.duration ?? 0);
            }, 0);
            const totalRunning = runningCourses.length + runningTryouts.length;
            const progress = totalRunning > 0
                ? (courseCompleted / totalRunning) * 100
                : 0;
            return {
                progress,
                courseCompleted,
                timeSpentLearning,
            };
        }
        catch (error) {
            throw new Error("failed to get progress:" + error.message);
        }
    }
}
export default new ProgressService();
