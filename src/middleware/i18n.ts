import { I18n } from "@grammyjs/i18n";
import MyContext from "../types/context";

const i18n = new I18n<MyContext>({
  defaultLocale: "en",
  useSession: true,
  directory: "locales"
});

export default i18n;
