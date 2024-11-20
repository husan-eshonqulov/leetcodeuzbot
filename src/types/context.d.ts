import { Context, LazySessionFlavor } from "grammy";
import { ConversationFlavor } from "@grammyjs/conversations";
import { I18nFlavor } from "@grammyjs/i18n";
import { MySessionData } from "./session";

type MyContext = Context &
  LazySessionFlavor<MySessionData> &
  I18nFlavor &
  ConversationFlavor;

export default MyContext;
