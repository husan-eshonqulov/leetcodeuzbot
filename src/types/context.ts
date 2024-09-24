import { Context } from "grammy";
import { ConversationFlavor } from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;

export default MyContext;
