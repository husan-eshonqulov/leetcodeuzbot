import MyBot from "../types/bot";
import { chatTypeFilter } from "../helper/middleware.js";

export const privateChatFilter = (bot: MyBot) => chatTypeFilter(bot, "private");
export const groupChatFilter = (bot: MyBot) => chatTypeFilter(bot, "group");
