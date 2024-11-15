import { Composer, lazySession } from "grammy";
import type MyContext from "../types/context";
import { registerCommands } from "../helper/composer.js";
import groupCommands from "../command/group/index.js";
import { userJoinHandler, userLeftHandler } from "../event/event.js";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";

const groupChatComposer = new Composer<MyContext>();

groupChatComposer.use(
  lazySession({
    initial: (): MySessionData<"group"> => {
      return { __language_code: "en" };
    }
  })
);

groupChatComposer.use(i18n);

registerCommands(groupChatComposer, groupCommands);

groupChatComposer.on(":new_chat_members", userJoinHandler);
groupChatComposer.on(":left_chat_member", userLeftHandler);

export default groupChatComposer;
