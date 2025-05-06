import { DataTypes, Model } from "sequelize";
export default (sequelize) => {
    class Users extends Model {
        static associate(models) {
            Users.belongsToMany(models.Product, {
                through: models.Cart,
                foreignKey: "userId",
                otherKey: "productId",
                as: "products",
            });
        }
    }
    Users.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("admin", "cashier"),
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
    }, {
        sequelize,
        modelName: "User",
        tableName: "users",
    });
    return Users;
};
