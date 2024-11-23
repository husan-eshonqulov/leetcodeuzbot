import { CommandMiddleware } from "grammy";
import MyContext from "./context";

export type MyCommandFn = CommandMiddleware<MyContext>;

interface MyCommandDetail {
  command: string;
  description: string;
  commandFn: MyCommandFn;
}

export default MyCommandDetail;
