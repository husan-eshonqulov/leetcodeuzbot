import MyCommand from "../../types/command";
import { MyCommandFn } from "../../types/command";

const languageCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.reply(ctx.t("private-command.language"));
};

const languageCommand: MyCommand = {
  command: "language",
  description: "tilni almashtirish",
  commandFn: languageCommandFn
};

export default languageCommand;
