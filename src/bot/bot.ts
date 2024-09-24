import { Bot, session } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context.js";
import config from "../config/config.js";
import commands from "../commands/commands.js";
import convers from "../conversations/conversations.js";
import { registerCommands, registerConversations } from "../util/bot.js";
import echo from "../middlewares/echo.js";

const bot = new Bot<MyContext>(config.botToken);

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

registerConversations(bot, convers);
registerCommands(bot, commands);

bot.on("message", echo);

export default bot;
