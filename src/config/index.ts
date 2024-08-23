import dotenv from "dotenv";
import IConfig from "../types/config";

dotenv.config();

const config: IConfig = {
  botToken: process.env.BOT_TOKEN!
};

export default config;
