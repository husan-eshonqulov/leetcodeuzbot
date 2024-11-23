import { Conversation, ConversationFn } from "@grammyjs/conversations";
import MyContext from "./context";

export type MyConversation = Conversation<MyContext>;
export type ConvBuilderFn = ConversationFn<MyContext>;

export interface MyConvDetail {
  title: string;
  builder: ConvBuilderFn;
}
