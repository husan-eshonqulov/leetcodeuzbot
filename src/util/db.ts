import path from "node:path";
import { Sequelize } from "sequelize";

const pathToDb = path.join(
  import.meta.dirname,
  "..",
  "..",
  "db",
  "database.sqlite"
);

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: pathToDb
});

export const connectDb = () => {
  return sequelize.sync();
};
