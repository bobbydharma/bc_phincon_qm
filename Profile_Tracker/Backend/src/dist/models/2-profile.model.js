import { DataTypes, Model } from "sequelize";
export default (sequelize) => {
    class Profile extends Model {
        static associate(models) {
            Profile.belongsTo(models.User, {
                foreignKey: "userId",
                as: "user",
            });
        }
    }
    Profile.init({
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
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
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
    }, {
        sequelize,
        modelName: "Profile",
        tableName: "profiles",
        timestamps: true,
    });
    return Profile;
};
