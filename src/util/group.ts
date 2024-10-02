import { UserPermission } from "../types/group.js";

export const givePermissions = (permissions: UserPermission[]) => {
  return permissions.reduce(
    (allowed, perm) => ((allowed[perm] = true), allowed),
    {} as { [key: string]: boolean }
  );
};

export const takePermissions = (permissions: UserPermission[]) => {
  return permissions.reduce(
    (disallowed, perm) => ((disallowed[perm] = false), disallowed),
    {} as { [key: string]: boolean }
  );
};
