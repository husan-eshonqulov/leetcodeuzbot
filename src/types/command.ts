import type { CommandMiddleware } from "grammy";
import type MyContext from "./context.js";

export type MyCommandFunc = CommandMiddleware<MyContext>;

interface MyCommand {
  command: string;
  description: string;
  commandFunc: MyCommandFunc;
}

export default MyCommand;
