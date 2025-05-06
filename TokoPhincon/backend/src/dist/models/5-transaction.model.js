import { DataTypes, Model } from "sequelize";
export default (sequelize) => {
    class Transaction extends Model {
        static associate(models) {
            Transaction.belongsTo(models.User, { foreignKey: "id", as: "user" });
        }
    }
    Transaction.init({
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
    }, {
        sequelize,
        modelName: "Transaction",
        tableName: "transactions",
        timestamps: false,
    });
    return Transaction;
};
