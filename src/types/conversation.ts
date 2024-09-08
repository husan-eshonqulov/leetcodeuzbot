import type { Conversation } from "@grammyjs/conversations";
import MyContext from "./context.js";

type MyConversation = Conversation<MyContext>;

export default MyConversation;
