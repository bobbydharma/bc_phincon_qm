import { DataTypes, Model, Sequelize } from "sequelize";
import { ProductModel } from "src/types/product.type";

export default (sequelize: Sequelize) => {
  class Products extends Model<ProductModel> {
    static associate(models: any) {
      Products.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      Products.belongsToMany(models.User, {
        through: models.Cart,
        foreignKey: "productId",
        otherKey: "userId",
        as: "users",
      });
    }
  }
  Products.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.UUID,
        references: {
          model: "categories",
          key: "id",
        },
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
      modelName: "Product",
      tableName: "products",
      timestamps: false,
    }
  );
  return Products;
};
