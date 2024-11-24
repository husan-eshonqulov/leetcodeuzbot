import MyContext from "../../types/context";
import {
  MyConversation,
  ConvBuilderFn,
  MyConvDetail
} from "../../types/conversation";
import { createLangKeyboard } from "../../helper/conversation.js";

const changeLangConvBuilderFn: ConvBuilderFn = async (
  conversation: MyConversation,
  ctx: MyContext
) => {
  const languageTitles = [
    ctx.t(`language.title-uz`),
    ctx.t(`language.title-en`),
    ctx.t(`language.title-ru`)
  ];
  const languageKeyboard = createLangKeyboard(languageTitles);

  await ctx.reply(ctx.t("private-chat-command.language"), {
    reply_markup: languageKeyboard
  });

  const languageResponse = await conversation.waitFor(":text");
  const selectedLanguageTitle = languageResponse.message?.text;

  if (selectedLanguageTitle) {
    const selectedLanguageIndex = languageTitles.indexOf(selectedLanguageTitle);
    if (selectedLanguageIndex === -1) {
      return await ctx.reply(ctx.t("change-lang-fail"), {
        reply_markup: { remove_keyboard: true }
      });
    }
    if (selectedLanguageIndex === 0) {
      conversation.session.__language_code = "uz";
      return await ctx.reply(ctx.t("change-lang-success"), {
        reply_markup: { remove_keyboard: true }
      });
    } else if (selectedLanguageIndex === 1) {
      conversation.session.__language_code = "en";
      return await ctx.reply(ctx.t("change-lang-success"), {
        reply_markup: { remove_keyboard: true }
      });
    } else if (selectedLanguageIndex === 2) {
      conversation.session.__language_code = "ru";
      return await ctx.reply(ctx.t("change-lang-success"), {
        reply_markup: { remove_keyboard: true }
      });
    }
  }

  return;
};

export const changeLangConv: MyConvDetail = {
  title: "changeLangConv",
  builder: changeLangConvBuilderFn
};
