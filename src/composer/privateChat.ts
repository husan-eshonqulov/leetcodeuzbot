import { Composer, lazySession } from "grammy";
import { conversations } from "@grammyjs/conversations";
import type MyContext from "../types/context";
import { registerCommands, registerConversations } from "../helper/composer.js";
import privateConvers from "../conversation/index.js";
import privateCommands from "../command/private/index.js";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(
  lazySession({
    initial: (): MySessionData<"private"> => {
      return { __language_code: "en", profile: null };
    }
  })
);

privateChatComposer.use(i18n);
privateChatComposer.use(conversations());

registerConversations(privateChatComposer, privateConvers);
registerCommands(privateChatComposer, privateCommands);

export default privateChatComposer;
