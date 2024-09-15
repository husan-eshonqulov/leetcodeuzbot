import path from "node:path";
import { Sequelize } from "sequelize";

const dbPath = path.join(import.meta.dirname, "..", "..", "db", "leetcode.db");

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath
});

export const connectDb = async () => {
  return sequelize
    .authenticate()
    .then(() => {
      console.log("Databe connecting successfully...");
      return sequelize.sync();
    })
    .catch((err) => {
      throw err;
    });
};
