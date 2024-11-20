import { Composer, lazySession } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import privateChatConversations from "../conversation/private/index.js";
import privateChatCommands from "../command/private/index.js";
import {
  registerCommandsToComposer,
  registerConverstionsToComposer
} from "../helper/composer.js";

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

registerConverstionsToComposer(privateChatComposer, privateChatConversations);
registerCommandsToComposer(privateChatComposer, privateChatCommands);

export default privateChatComposer;
