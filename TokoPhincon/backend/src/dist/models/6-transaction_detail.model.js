import { DataTypes, Model } from "sequelize";
export default (sequelize) => {
    class TransactionDetail extends Model {
        static associate(models) {
            TransactionDetail.belongsTo(models.Transaction, {
                foreignKey: "transactionId",
                as: "transaction",
            });
        }
    }
    TransactionDetail.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: true,
            primaryKey: true,
        },
        transactionId: {
            type: DataTypes.UUID,
            references: {
                model: "transactions",
                key: "id",
            },
            allowNull: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        products: {
            type: DataTypes.JSON,
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
        modelName: "TransactionDetail",
        tableName: "transaction_details",
        timestamps: false,
    });
    return TransactionDetail;
};
