import { v4 as uuidv4 } from "uuid";
export default {
    async up(queryInterface) {
        const [userResults] = (await queryInterface.sequelize.query(`SELECT id, role FROM users;`));
        // Cari user sesuai role
        const adminUser = userResults.find((user) => user.role === "admin");
        const cashierUser = userResults.find((user) => user.role === "cashier");
        if (!adminUser || !cashierUser) {
            throw new Error("Admin or cashier user not found in database");
        }
        const transactions = [
            {
                id: uuidv4(),
                userId: adminUser.id,
                cashierId: null,
                totalPrice: 20000000,
            },
            {
                id: uuidv4(),
                userId: null,
                cashierId: cashierUser.id,
                totalPrice: 1000000,
            },
        ];
        await queryInterface.bulkInsert("transactions", transactions, {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("transactions", {});
    },
};
