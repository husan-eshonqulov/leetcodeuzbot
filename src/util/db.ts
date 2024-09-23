import path from "node:path";
import { Sequelize } from "sequelize";

const dbPath = path.join(
  import.meta.dirname,
  "..",
  "..",
  "db",
  "database.sqlite"
);

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath
});

export const connectDb = async () => {
  return sequelize.sync({ force: true });
};
