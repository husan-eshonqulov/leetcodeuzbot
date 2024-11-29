import MyCommandDetail from "../../../types/command";
import { MyCommandFn } from "../../../types/command";
import i18n from "../../../middleware/i18n.js";
import { createLangKeyboard } from "../../../helper/conversation.js";
import { LanguageCode } from "grammy/types";

const languageCommandFn: MyCommandFn = async (ctx) => {
  const langCodes = i18n.locales as LanguageCode[];
  const langKeyboard = createLangKeyboard(langCodes, ctx);

  await ctx.reply(ctx.t("private-chat-command.language"), {
    reply_markup: langKeyboard
  });
};

const languageCommand: MyCommandDetail = {
  command: "language",
  description: "tilni almashtirish",
  commandFn: languageCommandFn
};

export default languageCommand;
