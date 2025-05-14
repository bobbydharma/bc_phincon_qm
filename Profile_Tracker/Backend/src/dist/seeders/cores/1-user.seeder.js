import { v4 as uuidv4 } from "uuid";
export default {
    async up(queryInterface) {
        const now = new Date();
        let users = [
            {
                id: uuidv4(),
                fullname: "Sigit Sasongko",
                username: "FastTiger-N4c3W",
                email: "sigit.center31@gmail.com",
                phoneNumber: "+6286403152165",
                password: "password123",
                active: 1,
                data: "{}",
                createdAt: now,
                updatedAt: now,
            },
            {
                id: uuidv4(),
                fullname: "Bobby Dharma",
                username: "bobbyds",
                email: "siko.spade31@gmail.com",
                phoneNumber: "+6285725363777",
                password: "password123",
                active: 1,
                data: '{"telegram": {"id": "703181169", "exam": {"currentExamId": "6d8f33d8-fa85-4447-9532-f6d3a2aea36a", "currentQuestionIndex": 6}, "lastState": "start", "currentExamId": null, "currentQuestionIndex": null}}',
                createdAt: now,
                updatedAt: now,
            },
            {
                id: uuidv4(),
                fullname: "System Administrator",
                username: "sysadmin",
                email: "sysadmin@phindojo.id",
                phoneNumber: "+6281234567890",
                password: "password123",
                active: 1,
                data: '{"platforms": ["[\\"phindojo\\"]"]}',
                createdAt: now,
                updatedAt: now,
            },
        ];
        await queryInterface.bulkInsert("users", users, {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("users", {});
    },
};
