import MyCommandDetail from "../../../types/command";
import { MyCommandFn } from "../../../types/command";

const helpCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("group-chat-command.help"));
};

const helpCommand: MyCommandDetail = {
  command: "help",
  description: "take help",
  commandFn: helpCommandFn
};

export default helpCommand;
