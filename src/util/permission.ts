import bot from "../bot/bot.js";
import config from "../config/config.js";
import type { UserPermissions } from "../types/permission";

export const restrictUser = async (
  userId: number,
  permissions: UserPermissions
) => {
  await bot.api.restrictChatMember(config.groupId, userId, permissions);
};
