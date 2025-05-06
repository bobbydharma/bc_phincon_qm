import jwt from "jsonwebtoken";
export const authenticate = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (typeof decoded === "object" && decoded !== null) {
            const encodedPayload = decoded.___;
            const userData = JSON.parse(Buffer.from(encodedPayload, "base64").toString("utf-8"));
            req.params = userData.id;
        }
        next();
    }
    catch {
        res.status(401).json({ message: "Invalid token" });
    }
};
