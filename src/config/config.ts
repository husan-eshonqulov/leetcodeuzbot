import path from "node:path";
import dotenv from "dotenv";
import type MyConfig from "../types/config";
import { getEnvVar } from "../helper/env.js";

const dbPath = path.resolve(process.cwd(), "data", "database.sqlite");

dotenv.config();

const config: MyConfig = {
  botToken: getEnvVar("BOT_TOKEN")!,
  groupId: parseInt(getEnvVar("GROUP_ID")!),
  dbPath: getEnvVar("DB_PATH", false) || dbPath,
  logLevel: getEnvVar("LOG_LEVEL", false) || "info"
};

export default config;
