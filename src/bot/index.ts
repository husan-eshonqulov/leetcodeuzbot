import { Bot } from "grammy";
import config from "../config/index.js";

const bot = new Bot(config.botToken);

export default bot;
