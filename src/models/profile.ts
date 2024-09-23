import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute
} from "sequelize";
import User from "./user";
import { sequelize } from "../util/db.js";

class Profile extends Model<
  InferAttributes<Profile, { omit: "user" }>,
  InferCreationAttributes<Profile, { omit: "user" }>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare lastSubmission: Date;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare userId: ForeignKey<User["id"]>;
  declare user?: NonAttribute<User>;

  declare getUser: HasOneGetAssociationMixin<User>;
  declare setUser: HasOneSetAssociationMixin<User, number>;
  declare createUser: HasOneCreateAssociationMixin<User>;

  declare static associations: {
    user: Association<User, Profile>;
  };
}

Profile.init(
  {
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
    lastSubmission: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  { tableName: "profiles", sequelize }
);

export default Profile;

// import type { ModelAttributes } from "sequelize";
// import { DataTypes } from "sequelize";
// import { sequelize } from "../util/db.js";

// const profileSchema: ModelAttributes = {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   lastSubmission: DataTypes.DATE
// };

// const Profile = sequelize.define("Profile", profileSchema);

// export default Profile;
