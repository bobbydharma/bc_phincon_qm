import { DataTypes, Model, Sequelize } from "sequelize";
import { TransactionDetailModel } from "../types/transaction_detail.type";

export default (sequelize: Sequelize) => {
  class TransactionDetail extends Model<TransactionDetailModel> {
    static associate(models: any) {
      TransactionDetail.belongsTo(models.Transaction, {
        foreignKey: "transactionId",
        as: "transaction",
      });
    }
  }
  TransactionDetail.init(
    {
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
    },
    {
      sequelize,
      modelName: "TransactionDetail",
      tableName: "transaction_details",
      timestamps: false,
    }
  );
  return TransactionDetail;
};
