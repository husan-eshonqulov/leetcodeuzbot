import User from "./user.js";
import Profile from "./profile.js";

const setAssociations = () => {
  User.hasOne(Profile, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    as: "profile"
  });
  Profile.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    as: "user"
  });
};

export default setAssociations;
