import MyCommand, { MyCommandFn } from "../../types/command.js";

const helpCommandFn: MyCommandFn = async (ctx) => {
  await ctx.reply("this is help message");
};

const helpCommand: MyCommand = {
  command: "help",
  description: "take help",
  commandFn: helpCommandFn
};

export default helpCommand;
