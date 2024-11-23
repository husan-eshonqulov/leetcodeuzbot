import { Keyboard } from "grammy";

export const createLangKeyboard = (langTitles: string[]) => {
  const languageKeyboard = new Keyboard();

  langTitles.forEach((langTitle) => languageKeyboard.text(langTitle));

  return languageKeyboard.resized();
};
