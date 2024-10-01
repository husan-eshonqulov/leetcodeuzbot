import { Composer, session } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context.js";
import { registerCommands, registerConversations } from "../util/composer.js";
import privateConvers from "../conversations/private/index.js";
import privateCommands from "../commands/private/index.js";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(session({ initial: () => ({}) }));
privateChatComposer.use(conversations());

registerConversations(privateChatComposer, privateConvers);
registerCommands(privateChatComposer, privateCommands);

export default privateChatComposer;
