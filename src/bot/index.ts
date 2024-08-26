import { Bot } from "grammy";
import config from "../config/index.ts";

const bot = new Bot(config.botToken);

export default bot;
