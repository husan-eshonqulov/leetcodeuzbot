import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
  Sequelize
} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare readonly id: number;
  declare firstname: string;
  declare lastname: string | null;
  declare username: string | null;
  declare profile: string | null;
  declare isMember: boolean;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      profile: DataTypes.STRING,
      isMember: DataTypes.BOOLEAN,

      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    { tableName: "users", sequelize }
  );
};

export default User;
