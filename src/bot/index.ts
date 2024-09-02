import { Bot } from "grammy";
import config from "../config/index.js";
import startCommand from "../commands/start.js";
import echo from "../middlewares/echo.js";

const bot = new Bot(config.botToken);

bot.command("start", startCommand);
bot.on("message", echo);

export default bot;
