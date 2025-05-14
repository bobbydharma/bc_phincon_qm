import db from "../models/index.js";
class UserService {
    async getUser(id) {
        try {
            const [user] = await db.sequelize.query(`
        SELECT *
        FROM users
        WHERE id = :id
      `, {
                replacements: { id },
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
    async updateUserProfile(userId, data) {
        const t = await db.sequelize.transaction();
        try {
            await db.sequelize.query(`
        UPDATE profiles
        SET bio = :bio, gender = :gender, address = :address
        WHERE userId = :userId
      `, {
                replacements: {
                    bio: data.profile.bio,
                    gender: data.profile.gender,
                    address: data.profile.address,
                    userId,
                },
                transaction: t,
            });
            await db.sequelize.query(`
        UPDATE users
        SET fullname = :fullname, email = :email, phoneNumber = :phoneNumber
        WHERE id = :userId
      `, {
                replacements: {
                    fullname: data.user.fullname,
                    email: data.user.email,
                    phoneNumber: data.user.phoneNumber,
                    userId,
                },
                transaction: t,
            });
            await t.commit();
            return {
                status: "success",
                message: "Profile updated successfully",
            };
        }
        catch (error) {
            await t.rollback();
            return {
                status: "error",
                message: "Failed to update profile: " + error.message,
            };
        }
    }
}
export default new UserService();
