import type { ConversationFlavor } from "@grammyjs/conversations";
import { Context } from "grammy";

type MyContext = Context & ConversationFlavor;

export default MyContext;
