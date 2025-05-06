import { v4 as uuidv4 } from "uuid";
export default {
    up: async (queryInterface) => {
        const [userResults] = (await queryInterface.sequelize.query(`SELECT id FROM users;`));
        const [productResults] = (await queryInterface.sequelize.query(`SELECT id, price FROM products;`));
        let carts = [
            {
                userId: userResults[0].id,
                productId: productResults[0].id,
                id: uuidv4(),
                qty: 2,
                totalPrice: productResults[0].price * 2,
            },
            {
                userId: userResults[0].id,
                productId: productResults[1].id,
                id: uuidv4(),
                qty: 2,
                totalPrice: productResults[1].price * 2,
            },
            {
                userId: userResults[1].id,
                productId: productResults[1].id,
                id: uuidv4(),
                qty: 2,
                totalPrice: productResults[1].price * 2,
            },
        ];
        await queryInterface.bulkInsert("carts", carts, {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete("carts", {});
    },
};
