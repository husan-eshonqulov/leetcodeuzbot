import { CommandMiddleware } from "grammy";
import MyContext from "./context.js";

interface MyCommand {
  name: string;
  desc: string;
  func: CommandMiddleware<MyContext>;
}

export default MyCommand;
