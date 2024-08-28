import { Bot } from "grammy";
import config from "../config/index.ts";
import startCommand from "../commands/start.ts";
import echo from "../middlewares/echo.ts";

const bot = new Bot(config.botToken);

bot.command("start", startCommand);
bot.on("message", echo);

export default bot;
