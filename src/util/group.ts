import { UserPermission } from "../types/group.js";

export const allowPermissions = (permissions: UserPermission[]) => {
  const allowedPermissions: { [key: string]: boolean } = {};

  permissions.forEach((perm) => {
    allowedPermissions[perm] = true;
  });

  return allowedPermissions;
};

export const disallowPermissions = (permissions: UserPermission[]) => {
  const disallowedPermissions: { [key: string]: boolean } = {};

  permissions.forEach((perm) => {
    disallowedPermissions[perm] = false;
  });

  return disallowedPermissions;
};
