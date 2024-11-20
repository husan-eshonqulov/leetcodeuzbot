import dotenv from "dotenv";
import MyConfig from "../types/config";
import { getEnvVar } from "../helper/env.js";

dotenv.config();

const config: MyConfig = {
  botToken: getEnvVar("BOT_TOKEN")!,
  logLevel: getEnvVar("LOG_LEVEL", false) || "info"
};

export default config;
