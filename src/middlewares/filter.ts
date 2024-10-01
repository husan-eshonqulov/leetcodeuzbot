import MyBot from "../types/bot.js";

export const privateChatFilter = (bot: MyBot) =>
  bot.filter((ctx) => ctx.chat?.type === "private");

export const groupChatFilter = (bot: MyBot) =>
  bot.filter(
    (ctx) => ctx.chat?.type === "group" || ctx.chat?.type === "supergroup"
  );
