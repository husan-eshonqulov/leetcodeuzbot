import { allowedTimeInterval } from "../util/date.js";
import { restrictUser } from "../util/permission.js";
import {
  allowedPermissions,
  disallowedPermissions
} from "../jobs/permissions.js";

export const isPassed = (startTime: number, endTime: number) => {
  return endTime - startTime < allowedTimeInterval;
};

export const givePermissions = async (userId: number) => {
  await restrictUser(userId, allowedPermissions);
};

export const takePermissions = async (userId: number) => {
  await restrictUser(userId, disallowedPermissions);
};
