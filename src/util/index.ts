import type MyBot from "../types/bot.js";
import type MyCommand from "../types/command.js";
import type MyConversation from "../types/conversation.js";
import { createConversation } from "@grammyjs/conversations";

// Register commands to bot
export const regComs = (bot: MyBot, coms: MyCommand[]) => {
  coms.forEach((com) => bot.command(com.command, com.commandFunc));
};

// Register conversations to bot
export const regCons = (bot: MyBot, cons: MyConversation[]) => {
  cons.forEach((con) => bot.use(createConversation(con.builderFunc, con.name)));
};
