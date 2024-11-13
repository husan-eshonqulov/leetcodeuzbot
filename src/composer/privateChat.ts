import { Composer, lazySession } from "grammy";
import { conversations } from "@grammyjs/conversations";
import type MyContext from "../types/context";
import { registerCommands, registerConversations } from "../helper/composer.js";
import privateConvers from "../conversation/index.js";
import privateCommands from "../command/private/index.js";
import { MySessionData } from "../types/session";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(
  lazySession({
    initial: (): MySessionData<"private"> => {
      return { language: "en", profile: null };
    }
  })
);
privateChatComposer.use(conversations());

registerConversations(privateChatComposer, privateConvers);
registerCommands(privateChatComposer, privateCommands);

export default privateChatComposer;
