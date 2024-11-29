import MyCommandDetail from "../../../types/command";
import { MyCommandFn } from "../../../types/command";

const helpCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("private-chat-command.help"));
};

const helpCommand: MyCommandDetail = {
  command: "help",
  description: "yordam olish",
  commandFn: helpCommandFn
};

export default helpCommand;
