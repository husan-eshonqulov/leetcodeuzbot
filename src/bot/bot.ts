import { Bot } from "grammy";
import type MyContext from "../types/context";
import config from "../config/config.js";
import privateChatComposer from "../composer/privateChat.js";
import groupChatComposer from "../composer/groupChat.js";
import privateCommands from "../command/private/index.js";
import groupCommands from "../command/group/index.js";
import { CommandType } from "../command/type.js";
import echo from "../middleware/echo.js";
import {
  allowGroup,
  groupChatFilter,
  privateChatFilter
} from "../middleware/filter.js";

const bot = new Bot<MyContext>(config.botToken);

const privateChat = privateChatFilter(bot);
const groupChat = groupChatFilter(bot);

privateChat.use(privateChatComposer);
groupChat.use(allowGroup, groupChatComposer);

bot.api.setMyCommands(privateCommands, {
  scope: { type: CommandType.private }
});

bot.api.setMyCommands(groupCommands, { scope: { type: CommandType.group } });

bot.on("message", echo);

export default bot;
