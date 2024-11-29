import MyCommandDetail from "../../../../types/command";
import { MyCommandFn } from "../../../../types/command";

const languageCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("group-chat-command.language"));
};

const languageCommand: MyCommandDetail = {
  command: "language",
  description: "tilni almashtirish",
  commandFn: languageCommandFn
};

export default languageCommand;
