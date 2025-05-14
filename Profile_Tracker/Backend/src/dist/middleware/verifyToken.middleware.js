import { verifyToken } from "../util/jwt.js";
export const protectRoute = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    const base64Token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(base64Token);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
