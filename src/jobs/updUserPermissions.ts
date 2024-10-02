import User from "../models/user.js";
import bot from "../bot/bot.js";
import config from "../config/config.js";
import { givePermissions, takePermissions } from "../util/group.js";
import { UserPermission } from "../types/group.js";
import { getUserLastSubDateInSecs } from "../util/api.js";
import { dateToSecs, oneDayInSecs } from "../util/date.js";

const permissions: UserPermission[] = [
  "can_send_messages",
  "can_send_audios",
  "can_send_documents",
  "can_send_photos",
  "can_send_videos",
  "can_send_video_notes",
  "can_send_voice_notes",
  "can_send_polls",
  "can_send_other_messages"
];

const updUserPermissions = async () => {
  const nowInSecs = dateToSecs(new Date());
  const users = await User.findAll({ where: { isMember: true } });

  users.forEach(async (user) => {
    const leetcodeUsername = user.profile;
    if (leetcodeUsername) {
      const lastSubInSecs = await getUserLastSubDateInSecs(leetcodeUsername);
      if (nowInSecs - lastSubInSecs < oneDayInSecs) {
        await bot.api.restrictChatMember(
          config.groupId,
          user.id,
          givePermissions(permissions)
        );
      } else {
        await bot.api.restrictChatMember(
          config.groupId,
          user.id,
          takePermissions(permissions)
        );
      }
    } else {
      await bot.api.restrictChatMember(
        config.groupId,
        user.id,
        takePermissions(permissions)
      );
    }
  });
};

export default updUserPermissions;
