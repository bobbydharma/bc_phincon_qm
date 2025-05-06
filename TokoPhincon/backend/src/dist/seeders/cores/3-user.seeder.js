import { Role } from "../../types/user.type.js";
import { v4 as uuidv4 } from "uuid";
export default {
    async up(queryInterface) {
        let users = [
            {
                id: uuidv4(),
                username: "Bobby@gmail.com",
                password: "password123",
                role: Role.Admin,
            },
            {
                id: uuidv4(),
                username: "Dharma@gmail.com",
                password: "password123",
                role: Role.Cashier,
            },
        ];
        await queryInterface.bulkInsert("users", users, {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("users", {});
    },
};
