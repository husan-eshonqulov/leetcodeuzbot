import type IConfig from "../types/config.js";
import dotenv from "dotenv";

dotenv.config();

const config: IConfig = {
  botToken: process.env.BOT_TOKEN!
};

export default config;
