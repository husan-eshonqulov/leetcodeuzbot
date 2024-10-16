import { User } from "../model/index.js";
import { getLastSubmission } from "../util/api.js";
import { dateToSeconds } from "../util/date.js";
import {
  isPassed,
  givePermissions,
  takePermissions
} from "../helper/permission.js";

const updUserPermissions = async () => {
  const restrictedUsers: User[] = [];
  const now = dateToSeconds(new Date());
  const users = await User.findAll({ where: { isMember: true } });

  users.forEach(async (user) => {
    const leetcodeUsername = user.profile;
    if (leetcodeUsername) {
      const lastSubmission = await getLastSubmission(leetcodeUsername);
      const passed = isPassed(lastSubmission, now);
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
