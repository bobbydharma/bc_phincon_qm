import { DataTypes, Model, Sequelize } from "sequelize";
import { ExamModel } from "src/types/exam.type";

export default (sequelize: Sequelize) => {
  class Exam extends Model<ExamModel> {
    static associate(models: any) {
      Exam.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Exam.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Exam",
      tableName: "exams",
      timestamps: true,
    }
  );
  return Exam;
};
