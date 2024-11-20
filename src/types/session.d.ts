import { ChatType } from "./chat";

export type PrivateSessionData = {
  __language_code: string;
  profile: string | null;
};

export type GroupSessionData = {
  __language_code: string;
};

export type MySessionData<T extends ChatType> = T extends "private"
  ? PrivateSessionData
  : GroupSessionData;
