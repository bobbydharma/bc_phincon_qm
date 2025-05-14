import db from "../models/index.js";
class ProfileService {
    async getProfile(userId) {
        try {
            const [user] = await db.sequelize.query(`
        SELECT *
        FROM profiles
        WHERE userId = :userId
      `, {
                replacements: { userId: userId },
            });
            if (!user || user.length === 0) {
                throw new Error("User not found");
            }
            return user[0];
        }
        catch (error) {
            throw new Error("failed to get course:" + error.message);
        }
    }
}
export default new ProfileService();
