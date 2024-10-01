import { Bot } from "grammy";
import MyContext from "../types/context.js";
import config from "../config/config.js";
import privateChatComposer from "../composers/privateChat.js";
import groupChatComposer from "../composers/groupChat.js";
import privateCommands from "../commands/private/index.js";
import groupCommands from "../commands/group/index.js";
import { CommandTypes } from "../types/command.js";
import echo from "../middlewares/echo.js";
import {
  allowedGroup,
  groupChatFilter,
  privateChatFilter
} from "../middlewares/filter.js";

const bot = new Bot<MyContext>(config.botToken);

const privateChat = privateChatFilter(bot);
const groupChat = groupChatFilter(bot);

privateChat.use(privateChatComposer);
groupChat.use(allowedGroup, groupChatComposer);

bot.api.setMyCommands(privateCommands, {
  scope: { type: CommandTypes.private }
});

bot.api.setMyCommands(groupCommands, { scope: { type: CommandTypes.group } });

bot.on("message", echo);

export default bot;
