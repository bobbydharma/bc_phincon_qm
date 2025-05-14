import tryoutSectionService from "../services/tryout_section.service.js";
import formatDate from "../util/libs.js";
class TryoutSectionController {
    async getRuningTryout(req, res) {
        try {
            console.log("getRuningTryout ====>>", req.user.id);
            const tryout = await tryoutSectionService.getRunningTryout(req.user.id);
            if (tryout) {
                const parsedTryout = tryout.runningTryout.map((course) => {
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
export default new TryoutSectionController();
