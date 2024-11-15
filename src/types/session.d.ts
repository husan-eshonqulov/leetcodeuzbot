export type PrivateSessionData = {
  __language_code: string;
  profile: string | null;
};

export type GroupSessionData = {
  __language_code: string;
};

export type MySessionData<T extends "private" | "group"> = T extends "private"
  ? PrivateSessionData
  : GroupSessionData;
