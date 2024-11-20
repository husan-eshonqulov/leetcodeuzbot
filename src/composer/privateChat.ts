import { Composer, lazySession } from "grammy";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import privateCommands from "../command/private/index.js";
import { regCommandsToComposer } from "../helper/composer.js";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(
  lazySession({
    initial: (): MySessionData<"private"> => {
      return { __language_code: "en", profile: null };
    }
  })
);

privateChatComposer.use(i18n);

regCommandsToComposer(privateChatComposer, privateCommands);

export default privateChatComposer;
