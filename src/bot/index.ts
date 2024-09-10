import { Bot, session } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context.js";
import config from "../config/index.js";
import { regComs, regCons } from "../helpers/index.js";
import commands from "../commands/index.js";
import convers from "../conversations/index.js";
import echo from "../middlewares/echo.js";

const bot = new Bot<MyContext>(config.botToken);

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

regCons(bot, convers);
regComs(bot, commands);

bot.on("message", echo);

export default bot;
