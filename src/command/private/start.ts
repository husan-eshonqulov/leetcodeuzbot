import type MyCommand from "../../types/command";
import type { MyCommandFn } from "../../types/command";

const startCommandFn: MyCommandFn = async (ctx) => {
  await ctx.reply(ctx.t("private-command.start"));
};

const startCommand: MyCommand = {
  command: "start",
  description: "botni ishga tushurish",
  commandFn: startCommandFn
};

export default startCommand;
