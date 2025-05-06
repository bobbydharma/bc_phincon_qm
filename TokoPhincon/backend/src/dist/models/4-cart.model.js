import { DataTypes, Model } from "sequelize";
export default (sequelize) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, { foreignKey: "userId", as: "user" });
            Cart.belongsTo(models.Product, {
                foreignKey: "productId",
                as: "product",
            });
        }
    }
    Cart.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: "users",
                key: "id",
            },
            allowNull: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        productId: {
            type: DataTypes.UUID,
            references: {
                model: "products",
                key: "id",
            },
            allowNull: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
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
        modelName: "Cart",
        tableName: "carts",
        timestamps: true,
    });
    return Cart;
};
