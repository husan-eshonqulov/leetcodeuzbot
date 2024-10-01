import { CommandMiddleware } from "grammy";
import MyContext from "./context.js";

export enum CommandTypes {
  "private" = "all_private_chats",
  "group" = "all_group_chats"
}

export type MyCommandFn = CommandMiddleware<MyContext>;

interface MyCommand {
  command: string;
  description: string;
  commandFn: MyCommandFn;
}

export default MyCommand;
