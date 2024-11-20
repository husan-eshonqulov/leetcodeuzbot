import MyCommand from "../../types/command";
import { MyCommandFn } from "../../types/command";

const helpCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("group-command.help"));
};

const helpCommand: MyCommand = {
  command: "help",
  description: "take help",
  commandFn: helpCommandFn
};

export default helpCommand;
