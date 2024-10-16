import path from "node:path";
import dotenv from "dotenv";
import type MyConfig from "../types/config.d.ts";
import { getEnvVar } from "../util/env.js";

const dbPath = path.resolve(process.cwd(), "data", "database.sqlite");

dotenv.config();

const config: MyConfig = {
  botToken: getEnvVar("BOT_TOKEN")!,
  groupId: parseInt(getEnvVar("GROUP_ID")!),
  dbPath: getEnvVar("DB_PATH", false) || dbPath,
  logLevel: getEnvVar("LOG_LEVEL", false) || "info"
};

export default config;
