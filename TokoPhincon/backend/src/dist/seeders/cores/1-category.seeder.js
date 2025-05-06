import { v4 as uuidv4 } from "uuid";
export default {
    async up(queryInterface) {
        let categories = [
            {
                id: uuidv4(),
                name: "Electronics",
            },
            {
                id: uuidv4(),
                name: "Audio",
            },
            {
                id: uuidv4(),
                name: "Wearables",
            },
            {
                id: uuidv4(),
                name: "Accessories",
            },
            {
                id: uuidv4(),
                name: "Storage",
            },
        ];
        await queryInterface.bulkInsert("categories", categories, {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("categories", {});
    },
};
