import { allowedTimeInterval } from "../util/date.js";
import { restrictUser } from "../util/permission.js";
import type { UserPermissions } from "../types/permission.js";

export const isSubmitted = (startTime: number, endTime: number) => {
  return endTime - startTime < allowedTimeInterval;
};

export const givePermissions = async (
  userId: number,
  perms: Array<keyof UserPermissions>
) => {
  const allowedPermissions = perms.reduce(
    (allowed, perm) => ((allowed[perm] = true), allowed),
    {} as UserPermissions
  );
  await restrictUser(userId, allowedPermissions);
};

export const takePermissions = async (
  userId: number,
  perms: Array<keyof UserPermissions>
) => {
  const disallowedPermissions = perms.reduce(
    (allowed, perm) => ((allowed[perm] = false), allowed),
    {} as UserPermissions
  );
  await restrictUser(userId, disallowedPermissions);
};
