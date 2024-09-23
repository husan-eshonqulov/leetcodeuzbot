import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  Association,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  DataTypes
} from "sequelize";
import Profile from "./profile";
import { sequelize } from "../util/db.js";

class User extends Model<
  InferAttributes<User, { omit: "profile" }>,
  InferCreationAttributes<User, { omit: "profile" }>
> {
  declare id: number;
  declare username: string | null;
  declare firstname: string;
  declare lastname: string | null;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare profile?: NonAttribute<Profile>;

  declare getProfile: HasOneGetAssociationMixin<Profile>;
  declare setProfile: HasOneSetAssociationMixin<Profile, number>;
  declare createProfile: HasOneCreateAssociationMixin<Profile>;

  declare static associations: {
    profile: Association<User, Profile>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  { tableName: "users", sequelize }
);

export default User;

// import type { ModelAttributes } from "sequelize";
// import { DataTypes } from "sequelize";
// import { sequelize } from "../util/db.js";
// import { IUserModel } from "../types/model.js";

// const userSchema: ModelAttributes = {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true
//   },
//   username: {
//     type: DataTypes.STRING,
//     unique: true
//   },
//   firstname: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastname: DataTypes.STRING
// };

// const User = sequelize.define<IUserModel>("User", userSchema);

// export default User;
