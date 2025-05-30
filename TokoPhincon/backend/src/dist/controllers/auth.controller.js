import AuthService from "../services/auth.service.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
class AuthController {
    async login(req, res) {
        try {
            const user = await AuthService.login(req.body.username, req.body.password);
            if (!user) {
                res.status(404).json({ status: "error", message: "Invalid username or password" });
                return;
            }
            const isValid = await bcrypt.compare(req.body.password, user?.password);
            if (!isValid) {
                res.status(401).json({ status: "error", message: "Invalid username or password" });
                return;
            }
            const encodedPayloadBase64 = Buffer.from(JSON.stringify({ id: user.id, username: user.username })).toString("base64");
            const decodedPayloadBase64 = JSON.parse(Buffer.from(encodedPayloadBase64, "base64").toString("utf8"));
            console.log(encodedPayloadBase64);
            console.log(decodedPayloadBase64);
            const token = Jwt.sign({ ___: encodedPayloadBase64 }, process.env.JWT_SECRET_KEY, {
                expiresIn: "1d",
            });
            console.log(token);
            if (process.env.NODE_ENV === "development") {
                console.log("SET COOKIE");
                res.cookie("token", token, {
                    expires: new Date(Date.now() + 2000000000),
                    httpOnly: false,
                    sameSite: "lax",
                    secure: true,
                });
            }
            else {
                res.cookie("token", token, {
                    expires: new Date(Date.now() + 2000000000),
                    httpOnly: true,
                    sameSite: "lax",
                    secure: true,
                });
            }
            res.status(200).json({ message: "Login successfully", token });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async register(req, res) {
        try {
            await AuthService.register(req.body);
            res.status(200).json({ message: "Register successfully" });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    }
}
export default new AuthController();
