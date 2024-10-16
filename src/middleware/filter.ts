import { NextFunction } from "grammy";
import config from "../config/config.js";
import type MyBot from "../types/bot.d.ts";
import type MyContext from "../types/context.d.ts";

export const privateChatFilter = (bot: MyBot) =>
  bot.filter((ctx) => ctx.chat?.type === "private");

export const groupChatFilter = (bot: MyBot) =>
  bot.filter((ctx) => ctx.chat?.type === "supergroup");

export const allowGroup = (ctx: MyContext, next: NextFunction) => {
  if (ctx.update.message!.chat.id === config.groupId) return next();
  return `https://t.me/${ctx.update.message!.chat} group not allowed`;
};
