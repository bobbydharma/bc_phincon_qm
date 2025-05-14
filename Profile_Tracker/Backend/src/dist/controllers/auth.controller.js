import { loginUser, registerUser, refreshAccessToken } from "../services/auth.service.js";
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { accessToken, refreshToken, user } = await loginUser(username, password);
        res
            .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
            .json({ accessToken, user });
    }
    catch (err) {
        res.status(401).json({ message: err.message });
    }
};
export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, username, password } = req.body;
        const user = await registerUser(fullname, email, phoneNumber, username, password);
        res.status(201).json({ user });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const refreshToken = (req, res) => {
    try {
        const token = req.cookies.refreshToken;
        if (!token) {
            throw new Error("Refresh token missing");
        }
        const accessToken = refreshAccessToken(token);
        res.json({ accessToken });
    }
    catch (err) {
        res.status(401).json({ message: err.message });
    }
};
export const logout = (_req, res) => {
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });
};
