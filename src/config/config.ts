import dotenv from "dotenv";
import MyConfig from "../types/config.js";

dotenv.config();

const config: MyConfig = {
  botToken: process.env.BOT_TOKEN!,
  groupId: +process.env.GROUP_ID!
};

export default config;
