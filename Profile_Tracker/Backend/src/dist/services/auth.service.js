import { createAccessToken, createRefreshToken, verifyToken, } from "../util/jwt.js";
import db from "../models/index.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
export const loginUser = async (username, password) => {
    const user = await db.User.findOne({ where: { username } });
    if (!user)
        throw new Error("User not found");
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
        throw new Error("Invalid password");
    const payload = { id: user.id, username: user.username };
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);
    return { accessToken, refreshToken, user };
};
export const registerUser = async (fullname, email, phoneNumber, username, password) => {
    const existing = await db.User.findOne({ where: { username } });
    if (existing)
        throw new Error("Username already exists");
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({
        id: userId,
        fullname,
        email,
        phoneNumber,
        username,
        password: hashedPassword,
        active: 1,
    });
    await db.Profile.create({
        id: uuidv4(),
        userId: userId,
        bio: "",
        gender: "",
        address: "",
        active: 1,
        data: "{}",
    });
    return newUser;
};
export const refreshAccessToken = (refreshToken) => {
    try {
        const decoded = verifyToken(refreshToken);
        const payload = {
            id: decoded.id,
            username: decoded.username,
        };
        const newAccessToken = createAccessToken(payload);
        return newAccessToken;
    }
    catch (err) {
        throw new Error("Invalid or expired token");
    }
};
