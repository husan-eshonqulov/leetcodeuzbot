import { Composer, lazySession } from "grammy";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import groupCommands from "../command/group/index.js";
import { regCommandsToComposer } from "../helper/composer.js";

const groupChatComposer = new Composer<MyContext>();

groupChatComposer.use(
  lazySession({
    initial: (): MySessionData<"group"> => {
      return { __language_code: "en" };
    }
  })
);

groupChatComposer.use(i18n);

regCommandsToComposer(groupChatComposer, groupCommands);

export default groupChatComposer;
