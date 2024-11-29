import { CallbackQueryMiddleware } from "grammy";
import MyContext from "./context";

export type MyCbQuery = {
  pattern: RegExp;
  handler: CallbackQueryMiddleware<MyContext>;
};
