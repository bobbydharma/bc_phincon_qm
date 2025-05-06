import { DataTypes, Model, Sequelize } from "sequelize";
import { CartModel } from "src/types/cart.type";

export default (sequelize: Sequelize) => {
  class Cart extends Model<CartModel> {
    static associate(models: any) {
      Cart.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Cart.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  Cart.init(
    {
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
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
      timestamps: true,
    }
  );
  return Cart;
};
