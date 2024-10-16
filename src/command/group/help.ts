import type MyCommand from "../../types/command.d.ts";
import type { MyCommandFn } from "../../types/command.d.ts";

const helpCommandFn: MyCommandFn = async (ctx) => {
  await ctx.reply("this is help message");
};

const helpCommand: MyCommand = {
  command: "help",
  description: "take help",
  commandFn: helpCommandFn
};

export default helpCommand;
