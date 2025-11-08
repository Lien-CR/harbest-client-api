import { DataTypes } from "sequelize";

export default (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "user",   // ✅ use the exact table name
      timestamps: false,   // optional: disable createdAt/updatedAt if not in your table
      freezeTableName: true, // ✅ prevent Sequelize from pluralizing
    }
  );

  return User;
};
