import { Composer, session } from "grammy";
import { conversations } from "@grammyjs/conversations";
import type MyContext from "../types/context.d.ts";
import { registerCommands, registerConversations } from "../util/composer.js";
import privateConvers from "../conversation/index.js";
import privateCommands from "../command/private/index.js";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(session({ initial: () => ({}) }));
privateChatComposer.use(conversations());

registerConversations(privateChatComposer, privateConvers);
registerCommands(privateChatComposer, privateCommands);

export default privateChatComposer;