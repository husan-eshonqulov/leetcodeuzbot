import { Sequelize } from "sequelize";
import config from "../config/config.js";
import User, { initUserModel } from "./user.js";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: config.dbPath
});

initUserModel(sequelize);

export { User };
