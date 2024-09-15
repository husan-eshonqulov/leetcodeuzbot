import type { ModelAttributes } from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../util/db.js";

const userSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: DataTypes.STRING
};

const User = sequelize.define("User", userSchema);

export default User;
