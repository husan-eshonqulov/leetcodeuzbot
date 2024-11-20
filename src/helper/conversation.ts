import { Keyboard } from "grammy";

export const createLanguageKeyboard = (languageTitles: string[]) => {
  const languageKeyboard = new Keyboard();

  languageTitles.forEach((languageTitle) =>
    languageKeyboard.text(languageTitle)
  );

  return languageKeyboard.resized();
};
