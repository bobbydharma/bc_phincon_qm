import progressService from "../services/progress.service.js";
class ProgressController {
    async getProgress(req, res) {
        try {
            const progress = await progressService.getProgress(req.user.id);
            if (progress) {
                res.status(200).json({
                    data: { progress: progress },
                    message: "success",
                });
            }
            else {
                res.status(404).json({ message: "not found" });
            }
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "internal server error: " + error.message });
        }
    }
}
export default new ProgressController();
