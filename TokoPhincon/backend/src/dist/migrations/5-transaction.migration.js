import { DataTypes } from "sequelize";
export default {
    up: async (queryInterface) => {
        await queryInterface.createTable("transactions", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.UUID,
                references: {
                    model: "users",
                    key: "id",
                },
                allowNull: true,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            cashierId: {
                type: DataTypes.UUID,
                references: {
                    model: "users",
                    key: "id",
                },
                allowNull: true,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            totalPrice: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("transactions");
    },
};
