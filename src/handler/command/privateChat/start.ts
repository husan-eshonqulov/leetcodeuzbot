import MyCommandDetail from "../../../types/command";
import { MyCommandFn } from "../../../types/command";

const startCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("private-chat-command.start"));
};

const startCommand: MyCommandDetail = {
  command: "start",
  description: "botni ishga tushurish",
  commandFn: startCommandFn
};

export default startCommand;
