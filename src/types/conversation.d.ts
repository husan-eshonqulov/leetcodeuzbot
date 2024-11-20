import { Conversation, ConversationFn } from "@grammyjs/conversations";
import MyContext from "./context";

export type MyConversation = Conversation<MyContext>;
export type ConversationBuilder = ConversationFn<MyContext>;

export interface ConversationDetails {
  title: string;
  builder: ConversationBuilder;
}
