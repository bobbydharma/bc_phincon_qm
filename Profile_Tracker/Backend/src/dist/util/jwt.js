import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET ?? "your-secret-key";
export const createAccessToken = (payload, expiresIn = "20m") => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
};
export const createRefreshToken = (payload, expiresIn = "7d") => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
};
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
