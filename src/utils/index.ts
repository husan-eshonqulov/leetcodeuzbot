import { MiddlewareFn } from "grammy";
import MyBot from "../types/bot.js";
import MyContext from "../types/context.js";
import MyCommand from "../types/command.js";

// Register commands to bot
export const regComs = (bot: MyBot, coms: MyCommand[]) => {
  coms.forEach((com) => bot.command(com.name, com.func));
};

// Register conversations to bot
export const regCons = (bot: MyBot, cons: MiddlewareFn<MyContext>[]) => {
  cons.forEach((con) => bot.use(con));
};
