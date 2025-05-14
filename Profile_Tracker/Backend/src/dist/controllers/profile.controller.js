import profileService from "../services/profile.service.js";
class ProfileController {
    async getProfile(req, res) {
        try {
            const user = await profileService.getProfile(req.user.id);
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
            throw new Error("failed to getProfile:" + error.message);
        }
    }
}
export default new ProfileController();
