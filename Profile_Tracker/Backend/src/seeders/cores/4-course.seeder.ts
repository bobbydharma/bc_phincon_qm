import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
  async up(queryInterface: QueryInterface) {
    const now = new Date();
    const courses = [
      {
        id: uuidv4(),
        code: "ISMS-S01_API_SECURITY",
        title: "API Security",
        description: Array(15).fill(null).map((_, i) => `Lorem ipsum dolor ${i + 1}`).join(' '),
        order: 1,
        data: JSON.stringify({
          icon: "🔐",
          type: "LMS",
          telegram: { shortId: 1},
          startDate: "2025-05-05",
          endDate: "2025-05-06"
        }),
        tag: "phincon",
        active: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        code: "ISMS-S21_SECURE_SYSTEM_DEVELOPMENT_LIFECYCLE",
        title: "Secure System Development Lifecycle",
        description: Array(12).fill(null).map((_, i) => `Lorem ipsum dolor ${i + 1}`).join(' '),
        order: 1,
        data: JSON.stringify({
          icon: "🔐",
          type: "LMS",
          telegram: { shortId: 2 },
          startDate: "2025-05-05",
          endDate: "2025-05-12"
        }),
        tag: "phincon",
        active: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        code: "ISMS-S30_BUILD_SECURITY_SYSTEM_STANDARD",
        title: "Security System Standard",
        description: Array(17).fill(null).map((_, i) => `Lorem ipsum dolor ${i + 1}`).join(' '),
        order: 1,
        data: JSON.stringify({
          icon: "🔐",
          type: "LMS",
          telegram: { shortId: 3 },
          startDate: "2025-05-07",
          endDate: "2025-05-12"
        }),
        tag: "phincon",
        active: 1,
        createdAt: now,
        updatedAt: now,
      },
    ];
    
    await queryInterface.bulkInsert("courses", courses, {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("courses", {});
  },
};
