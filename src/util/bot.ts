import { createConversation } from "@grammyjs/conversations";
import MyBot from "../types/bot.js";
import MyCommand from "../types/command.js";
import MyConversation from "../types/conversation.js";

// Register commands to bot
export const registerCommands = (bot: MyBot, coms: MyCommand[]) => {
  coms.forEach((com) => bot.command(com.command, com.commandFn));
};

// Register conversations to bot
export const registerConversations = (bot: MyBot, cons: MyConversation[]) => {
  cons.forEach((con) => bot.use(createConversation(con.builder, con.title)));
};
