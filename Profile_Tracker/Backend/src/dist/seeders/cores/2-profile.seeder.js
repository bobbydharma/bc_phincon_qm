import { v4 as uuidv4 } from "uuid";
export default {
    async up(queryInterface) {
        const now = new Date();
        const userId = await queryInterface.sequelize.query(`SELECT id FROM users;`);
        const userIdMap = {};
        userId[0].forEach((user, index) => {
            userIdMap[index] = user.id;
        });
        let profiles = [
            {
                id: uuidv4(),
                userId: userIdMap[0],
                bio: "Sigit Sasongko",
                gender: "Male",
                address: "Jl. Soekarno Hatta No. 12, Bandung",
                active: 1,
                data: "{}",
                createdAt: now,
                updatedAt: now,
            },
            {
                id: uuidv4(),
                userId: userIdMap[1],
                bio: "Sigit Sasongko",
                gender: "Male",
                address: "Jl. Soekarno Hatta No. 13, Bandung",
                active: 1,
                data: "{\"telegram\": {\"id\": \"703181169\", \"exam\": {\"currentExamId\": \"6d8f33d8-fa85-4447-9532-f6d3a2aea36a\", \"currentQuestionIndex\": 6}, \"lastState\": \"start\", \"currentExamId\": null, \"currentQuestionIndex\": null}}",
                createdAt: now,
                updatedAt: now,
            },
            {
                id: uuidv4(),
                userId: userIdMap[2],
                bio: "System Administrator",
                gender: "Male",
                address: "Jl. Soekarno Hatta No. 14, Bandung",
                active: 1,
                data: "{\"platforms\": [\"[\\\"phindojo\\\"]\"]}",
                createdAt: now,
                updatedAt: now,
            },
        ];
        await queryInterface.bulkInsert("profiles", profiles, {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("profiles", {});
    },
};
