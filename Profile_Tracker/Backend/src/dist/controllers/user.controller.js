import userService from "../services/user.service.js";
class UserController {
    async getUser(req, res) {
        try {
            const user = await userService.getUser(req.user.id);
            if (user) {
                res.status(200).json({
                    data: user,
                    message: "success",
                });
            }
            else {
                res.status(404).json({ message: "not found" });
            }
        }
        catch (error) {
            throw new Error("failed to login:" + error.message);
        }
    }
    async updateUserProfile(req, res) {
        try {
            const result = await userService.updateUserProfile(req.user.id, req.body);
            if (result.status === "success") {
                res.status(200).json({
                    message: result.message,
                });
            }
            else {
                res.status(400).json({
                    message: result.message,
                });
            }
        }
        catch (error) {
            res.status(500).json({
                message: "Internal server error: " + error.message,
            });
        }
    }
}
export default new UserController();
