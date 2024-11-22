import { Composer, lazySession } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import groupChatConversations from "../conversation/group/index.js";
import groupChatCommands from "../command/group/index.js";
import {
  registerCommandsToComposer,
  registerConverstionsToComposer
} from "../helper/composer.js";

const groupChatComposer = new Composer<MyContext>();

groupChatComposer.use(
  lazySession({
    initial: (): MySessionData<"supergroup"> => {
      return { __language_code: "en" };
    }
  })
);

groupChatComposer.use(i18n);
groupChatComposer.use(conversations());

registerConverstionsToComposer(groupChatComposer, groupChatConversations);
registerCommandsToComposer(groupChatComposer, groupChatCommands);

export default groupChatComposer;
