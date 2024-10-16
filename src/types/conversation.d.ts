import { Conversation, ConversationFn } from "@grammyjs/conversations";
import MyContext from "./context.d.ts";

export type MyConversationType = Conversation<MyContext>;
type MyConversationBuilder = ConversationFn<MyContext>;

interface MyConversation {
  title: string;
  builder: MyConversationBuilder;
}

export default MyConversation;
