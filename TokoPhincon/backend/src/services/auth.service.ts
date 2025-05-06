import db from "../models/index.js";
import { UserModel } from "../types/user.type.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

type RegisterUser = Pick<UserModel, "id" | "username" | "password" | "role">;

class AuthService {
    async login(username: string, password: string) {
        try {
            const user = await db.User.findOne({ where: { username } });
            return user;
        } catch (error: any) {
            throw new Error("failed to login:" + error.message);
        }
    }
    async register(data: RegisterUser) {
        try {
            data.password = await bcrypt.hash(data.password, 10);
            const user = await db.User.create({ ...data, id: uuidv4(), active: true });
            return user;
        } catch (error: any) {
            throw new Error("failed to create:" + error.message);
        }
    }
}

export default new AuthService();