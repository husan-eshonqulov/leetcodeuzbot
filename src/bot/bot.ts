import { Bot } from "grammy";
import MyContext from "../types/context";
import config from "../config/config.js";
import privateChatComposer from "../composer/privateChat.js";
import groupChatComposer from "../composer/groupChat.js";
import privateChatCommands from "../command/private/index.js";
import groupChatCommands from "../command/group/index.js";
import { groupChatFilter, privateChatFilter } from "../middleware/filter.js";
import { setCommandMenu } from "../helper/bot.js";
import echo from "../middleware/echo.js";

const bot = new Bot<MyContext>(config.botToken);

const privateChat = privateChatFilter(bot);
const groupChat = groupChatFilter(bot);

privateChat.use(privateChatComposer);
groupChat.use(groupChatComposer);

setCommandMenu(bot, privateChatCommands, "private");
setCommandMenu(bot, groupChatCommands, "group");

bot.on("message", echo);

export default bot;
