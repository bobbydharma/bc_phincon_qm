import e from "express";
import { DataTypes, Model, Sequelize } from "sequelize";
import { ProductModel } from "src/types/product.type";

export default (sequelize: Sequelize) => {
  class Products extends Model<ProductModel> {
    static associate(models: any) {}
  }
  Products.init(
    {
      id: {
        type: DataTypes.INTEGER,
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
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
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
