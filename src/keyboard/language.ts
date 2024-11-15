import { Keyboard } from "grammy";

const genLangKeyboard = (langs: string[]) => {
  const langKeyboard = new Keyboard();
  langs.forEach((lang) => langKeyboard.text(lang));
  return langKeyboard.resized();
};

export default genLangKeyboard;
