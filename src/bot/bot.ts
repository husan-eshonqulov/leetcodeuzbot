import { Bot, session } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context.js";
import config from "../config/config.js";
import privateCommands from "../commands/private/index.js";
import groupCommands from "../commands/group/index.js";
import convers from "../conversations/conversations.js";
import { registerCommands, registerConversations } from "../util/composer.js";
import echo from "../middlewares/echo.js";
import { groupChatFilter, privateChatFilter } from "../middlewares/filter.js";

const bot = new Bot<MyContext>(config.botToken);

const privateChats = privateChatFilter(bot);
const groupChats = groupChatFilter(bot);

privateChats.use(session({ initial: () => ({}) }));
privateChats.use(conversations());

registerConversations(privateChats, convers);
registerCommands(privateChats, privateCommands);
registerCommands(groupChats, groupCommands);

bot.api.setMyCommands(privateCommands, {
  scope: { type: "all_private_chats" }
});

bot.api.setMyCommands(groupCommands, { scope: { type: "all_group_chats" } });

bot.on("message", echo);

export default bot;
