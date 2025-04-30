import { DataTypes, Model } from "sequelize";
export default (sequelize) => {
    class Products extends Model {
        static associate(models) { }
    }
    Products.init({
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
    }, {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: false,
    });
    return Products;
};
