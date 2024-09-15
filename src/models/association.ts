import User from "./user.js";
import Profile from "./profile.js";

const defineAssociations = () => {
  User.hasOne(Profile);
  Profile.belongsTo(User);
};

export default defineAssociations;
