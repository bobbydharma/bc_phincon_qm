import { DataTypes } from "sequelize";
export default {
    up: async (queryInterface) => {
        await queryInterface.createTable("products", {
            id: {
                type: DataTypes.INTEGER,
                defaultValue: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable("products");
    },
};
export function up(queryInterface) {
    throw new Error("Function not implemented.");
}
