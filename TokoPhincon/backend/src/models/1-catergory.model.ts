import { DataTypes, Model, Sequelize } from "sequelize";
import { CategoryModel } from "src/types/category.type.js";

export default (sequelize: Sequelize) => {
  class Categories extends Model<CategoryModel> {
    static associate(models: any) {
      Categories.hasMany(models.Product, {
        foreignKey: "categoryId",
        as: "products",
      });
    }
  }
  Categories.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
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
      modelName: "Category",
      tableName: "categories",
      timestamps: false,
    }
  );
  return Categories;
};
