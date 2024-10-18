import bot from "../bot/bot.js";
import config from "../config/config.js";
import type { UserPermissions } from "../types/permission";

export const givePermissions = async (
  userId: number,
  perms: Array<keyof UserPermissions>
) => {
  await restrictUser(userId, modifyPermissions(perms, true));
};

export const takePermissions = async (
  userId: number,
  perms: Array<keyof UserPermissions>
) => {
  await restrictUser(userId, modifyPermissions(perms, false));
};

const restrictUser = async (userId: number, permissions: UserPermissions) => {
  await bot.api.restrictChatMember(config.groupId, userId, permissions);
};

const modifyPermissions = (
  perms: Array<keyof UserPermissions>,
  value: boolean
) => {
  return perms.reduce((allowed, perm) => {
    allowed[perm] = value;
    return allowed;
  }, {} as UserPermissions);
};
