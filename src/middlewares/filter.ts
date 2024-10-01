import { NextFunction } from "grammy";
import config from "../config/config.js";
import MyBot from "../types/bot.js";
import MyContext from "../types/context.js";

export const privateChatFilter = (bot: MyBot) =>
  bot.filter((ctx) => ctx.chat?.type === "private");

export const groupChatFilter = (bot: MyBot) =>
  bot.filter(
    (ctx) => ctx.chat?.type === "group" || ctx.chat?.type === "supergroup"
  );

export const allowedGroup = (ctx: MyContext, next: NextFunction) => {
  if (ctx.update.message?.chat.id === config.groupId) {
    return next();
  }
};
