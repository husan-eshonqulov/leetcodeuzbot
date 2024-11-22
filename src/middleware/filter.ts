import MyBot from "../types/bot";
import { chatTypeFilter } from "../helper/middleware.js";
import { ChatType } from "../types/enum.js";

export const privateChatFilter = (bot: MyBot) => {
  return chatTypeFilter(bot, ChatType.private);
};

export const groupChatFilter = (bot: MyBot) => {
  return chatTypeFilter(bot, ChatType.group);
};
