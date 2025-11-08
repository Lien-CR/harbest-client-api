import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ApiKey = sequelize.define("ApiKey", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    companyId: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: "api_keys",
  });

  return ApiKey;
};
