import { CommandMiddleware } from "grammy";
import MyContext from "./context.d.ts";

export type MyCommandFn = CommandMiddleware<MyContext>;

interface MyCommand {
  command: string;
  description: string;
  commandFn: MyCommandFn;
}

export default MyCommand;
