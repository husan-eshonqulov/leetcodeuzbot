import genLangKeyboard from "../../keyboard/language.js";
import type MyCommand from "../../types/command";
import type { MyCommandFn } from "../../types/command";

const languageCommandFn: MyCommandFn = async (ctx) => {
  const languages = [
    ctx.t("language.first"),
    ctx.t("language.second"),
    ctx.t("language.third")
  ];
  const langKeyboard = genLangKeyboard(languages);

  return await ctx.reply(ctx.t("private-command.language"), {
    reply_markup: langKeyboard
  });
};

const languageCommand: MyCommand = {
  command: "language",
  description: "tilni almashtirish",
  commandFn: languageCommandFn
};

export default languageCommand;
