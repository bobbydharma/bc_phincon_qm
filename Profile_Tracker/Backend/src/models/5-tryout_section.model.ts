import { DataTypes, Model, Sequelize } from "sequelize";
import { TryoutSectionModel } from "src/types/tryout_section.type";

export default (sequelize: Sequelize) => {
  class TryoutSection extends Model<TryoutSectionModel> {
    static associate(models: any) {}
  }
  TryoutSection.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      modelName: "TryoutSection",
      tableName: "tryout_sections",
      timestamps: true,
    }
  );
  return TryoutSection;
};

