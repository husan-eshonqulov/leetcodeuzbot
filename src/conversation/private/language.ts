import MyContext from "../../types/context";
import {
  MyConversation,
  ConversationBuilder,
  ConversationDetails
} from "../../types/conversation";
import { createLanguageKeyboard } from "../../helper/conversation.js";

const changeLangConversationBuilder: ConversationBuilder = async (
  conversation: MyConversation,
  ctx: MyContext
) => {
  const languageCode = ctx.session.__language_code;
  const languageTitles = [
    ctx.t(`lang-${languageCode}.title-uz`),
    ctx.t(`lang-${languageCode}.title-en`),
    ctx.t(`lang-${languageCode}.title-ru`)
  ];
  const languageKeyboard = createLanguageKeyboard(languageTitles);

  await ctx.reply(ctx.t("private-command.language"), {
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

export const changeLangConversation: ConversationDetails = {
  title: "changeLangConversation",
  builder: changeLangConversationBuilder
};
