import { InlineKeyboard } from "grammy";
import { LanguageCode } from "grammy/types";
import MyContext from "../types/context";

export const getLangTitles = (langCodes: LanguageCode[], ctx: MyContext) => {
  return langCodes.map((langCode) => ctx.t(`language.title-${langCode}`));
};

export const createLangKeyboard = (
  langCodes: LanguageCode[],
  ctx: MyContext
) => {
  const langKeyboard = new InlineKeyboard();

  langCodes.forEach((langCode, i) => {
    const payload = `language.title-${langCode}`;
    if (i % 3 === 0) langKeyboard.row();
    langKeyboard.text(ctx.t(payload), payload);
  });

  return langKeyboard;
};
