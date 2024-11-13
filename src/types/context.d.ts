import { Context, LazySessionFlavor } from "grammy";
import { ConversationFlavor } from "@grammyjs/conversations";
import { MySessionData } from "./session.js";

type MyContext = Context &
  LazySessionFlavor<MySessionData> &
  ConversationFlavor;

export default MyContext;
