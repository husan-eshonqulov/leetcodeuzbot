import { sequelize } from "../model/index.js";

const connectDb = () => {
  return sequelize.sync();
};

export default connectDb;
