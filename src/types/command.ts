import { CommandMiddleware } from "grammy";
import MyContext from "./context.js";

export type MyCommandFn = CommandMiddleware<MyContext>;

interface MyCommand {
  command: string;
  description: string;
  commandFn: MyCommandFn;
}

export default MyCommand;
