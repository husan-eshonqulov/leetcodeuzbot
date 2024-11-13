export type PrivateSessionData = {
  language: string;
  profile: string | null;
};

export type GroupSessionData = {
  language: string;
};

export type MySessionData<T extends "private" | "group"> = T extends "private"
  ? PrivateSessionData
  : GroupSessionData;
