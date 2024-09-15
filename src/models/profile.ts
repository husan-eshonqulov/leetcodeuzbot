import type { ModelAttributes } from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../util/db.js";

const profileSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  lastSubmission: DataTypes.DATE
};

const Profile = sequelize.define("Profile", profileSchema);

export default Profile;
