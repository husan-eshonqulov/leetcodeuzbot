import type { Conversation, ConversationFn } from "@grammyjs/conversations";
import MyContext from "./context.js";

export type MyConType = Conversation<MyContext>;
type BuilderFunc = ConversationFn<MyContext>;

interface MyConversation {
  name: string;
  builderFunc: BuilderFunc;
}

export default MyConversation;
