import User from "../models/user.js";
import { getUserLastSubDateInSecs } from "../util/api.js";
import { dateToSeconds } from "../util/date.js";
import {
  isPassed,
  givePermissions,
  takePermissions
} from "../helpers/permission.js";

const updUserPermissions = async () => {
  const restrictedUsers: User[] = [];
  const nowInSecs = dateToSeconds(new Date());
  const users = await User.findAll({ where: { isMember: true } });

  users.forEach(async (user) => {
    const leetcodeUsername = user.profile;
    if (leetcodeUsername) {
      const lastSubInSecs = await getUserLastSubDateInSecs(leetcodeUsername);
      const passed = isPassed(lastSubInSecs, nowInSecs);
      if (passed) {
        await givePermissions(user.id);
      } else {
        await takePermissions(user.id);
        restrictedUsers.push(user);
      }
    } else {
      await takePermissions(user.id);
      restrictedUsers.push(user);
    }
  });
};

export default updUserPermissions;
