import dotenv from "dotenv";
import IConfig from "../types/config.js";

dotenv.config();

const config: IConfig = {
  botToken: process.env.BOT_TOKEN!
};

export default config;
