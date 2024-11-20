import MyCommand from "../../types/command";
import { MyCommandFn } from "../../types/command";

const startCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("private-command.start"));
};

const startCommand: MyCommand = {
  command: "start",
  description: "botni ishga tushurish",
  commandFn: startCommandFn
};

export default startCommand;
