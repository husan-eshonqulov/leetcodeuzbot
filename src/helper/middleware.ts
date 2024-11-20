import MyBot from "../types/bot";
import { ChatType } from "../types/chat";

export const chatTypeFilter = (bot: MyBot, type: ChatType) => {
  return bot.filter((ctx) => ctx.chat?.type === type);
};
