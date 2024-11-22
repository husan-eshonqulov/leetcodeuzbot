import MyBot from "../types/bot";
import { ChatType } from "../types/enum";

export const chatTypeFilter = (bot: MyBot, chatType: ChatType) => {
  return bot.filter((ctx) => ctx.chat?.type === chatType);
};
