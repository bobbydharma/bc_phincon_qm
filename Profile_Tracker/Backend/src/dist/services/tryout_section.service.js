import db from "../models/index.js";
import { QueryTypes } from "sequelize";
class TryoutSectionService {
    async getRunningTryout(userId) {
        try {
            const [runningTryout] = await db.sequelize.query(`
        SELECT *
        FROM tryout_sections
        WHERE JSON_UNQUOTE(JSON_EXTRACT(data, '$.startDate')) <= CURDATE()
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.endDate')) >= CURDATE()
      `);
            const result = await db.sequelize.query(`
        SELECT count(*) as count
        FROM exams
        WHERE userId = :userId
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.status')) IN ('submitted', 'completed')
          AND JSON_UNQUOTE(JSON_EXTRACT(data, '$.tryoutSectionId')) IN (:runningTryoutIds)
        `, {
                replacements: {
                    userId: userId,
                    runningTryoutIds: runningTryout.map((c) => c.id),
                },
                type: QueryTypes.SELECT,
            });
            const completedTryout = parseInt(result[0]?.count ?? 0);
            const tryoutProgress = (completedTryout / runningTryout.length) * 100;
            return { runningTryout, tryoutProgress };
        }
        catch (error) {
            console.log("error ===>", error);
            throw new Error("failed to get tryout section:" + error.message);
        }
    }
}
export default new TryoutSectionService();
