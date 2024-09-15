import type MyContext from "../types/context.js";
import { Bot, session } from "grammy";
import { conversations } from "@grammyjs/conversations";
import config from "../config/index.js";
import coms from "../commands/index.js";
import convers from "../conversations/index.js";
import { regComs, regCons } from "../util/index.js";
import echo from "../middlewares/echo.js";

const bot = new Bot<MyContext>(config.botToken);

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

regCons(bot, convers);
regComs(bot, coms);

bot.on("message", echo);

export default bot;
