import MyCommand from "../../types/command";
import { MyCommandFn } from "../../types/command";

const helpCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("private-command.help"));
};

const helpCommand: MyCommand = {
  command: "help",
  description: "yordam olish",
  commandFn: helpCommandFn
};

export default helpCommand;
