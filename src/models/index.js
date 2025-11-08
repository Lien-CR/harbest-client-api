import { Sequelize } from "sequelize";
import UserModel from "./user.js";
import ApiKeyModel from "./apiKey.js";

// ✅ AWS RDS MySQL Connection
const sequelize = new Sequelize("harbest", "admin", "harb3st-d3v!", {
  host: "harbest-dev.cbc2cw26i0n2.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
  port: 3306,
  logging: false, // optional: disable SQL logging in console
});

const User = UserModel(sequelize);
const ApiKey = ApiKeyModel(sequelize);

// Sync models to the database
await sequelize.sync({ alter: true });

export { sequelize, User, ApiKey };
