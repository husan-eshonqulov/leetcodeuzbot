import { Bot } from "grammy";
import MyContext from "../types/context";
import config from "../config/config.js";
import privateChatComposer from "../composer/privateChat.js";
import groupChatComposer from "../composer/groupChat.js";
import privateCommands from "../command/private/index.js";
import groupCommands from "../command/group/index.js";
import { groupChatFilter, privateChatFilter } from "../middleware/filter.js";
import { setCommandMenu } from "../helper/bot.js";
import echo from "../middleware/echo.js";

const bot = new Bot<MyContext>(config.botToken);

const privateChat = privateChatFilter(bot);
const groupChat = groupChatFilter(bot);

privateChat.use(privateChatComposer);
groupChat.use(groupChatComposer);

setCommandMenu(bot, privateCommands, "private");
setCommandMenu(bot, groupCommands, "group");

bot.on("message", echo);

export default bot;
