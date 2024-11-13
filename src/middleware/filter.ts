import type MyBot from "../types/bot";

export const privateChatFilter = (bot: MyBot) => {
  return bot.filter((ctx) => ctx.chat?.type === "private");
};

export const groupChatFilter = (bot: MyBot) => {
  return bot.filter((ctx) => ctx.chat?.type === "supergroup");
};
