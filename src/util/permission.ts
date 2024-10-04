import bot from "../bot/bot.js";
import config from "../config/config.js";
import { UserPermissions } from "../types/permission.js";

export const restrictUser = async (
  userId: number,
  permissions: UserPermissions
) => {
  await bot.api.restrictChatMember(config.groupId, userId, permissions);
};
