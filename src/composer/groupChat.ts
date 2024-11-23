import { Composer, lazySession } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import groupChatConvs from "../conversation/groupChat/index.js";
import { groupChatAdminCommands } from "../command/groupChat/index.js";
import {
  regCommandsToComposer,
  regConvsToComposer
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

regConvsToComposer(groupChatComposer, groupChatConvs);
regCommandsToComposer(groupChatComposer, groupChatAdminCommands);

export default groupChatComposer;
