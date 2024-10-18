import { User } from "../model/index.js";
import { getLastSubmission } from "../util/api.js";
import { dateToSeconds } from "../util/date.js";
import type { UserPermissions } from "../types/permission";
import {
  isSubmitted,
  givePermissions,
  takePermissions
} from "../helper/permission.js";

const permissions: Array<keyof UserPermissions> = [
  "can_send_messages",
  "can_send_audios",
  "can_send_documents",
  "can_send_photos",
  "can_send_videos",
  "can_send_video_notes",
  "can_send_voice_notes",
  "can_send_other_messages"
];

const updUserPermissions = async () => {
  const restrictedUsers: User[] = [];
  const now = dateToSeconds(new Date());
  const users = await User.findAll({ where: { isMember: true } });

  users.forEach(async (user) => {
    const leetcodeUsername = user.profile;
    if (leetcodeUsername) {
      const lastSubmission = await getLastSubmission(leetcodeUsername);
      const submitted = isSubmitted(lastSubmission, now);
      if (submitted) {
        await givePermissions(user.id, permissions);
      }
    } else {
      await takePermissions(user.id, permissions);
      restrictedUsers.push(user);
    }
  });
};

export default updUserPermissions;
