import { Composer, lazySession } from "grammy";
import { conversations } from "@grammyjs/conversations";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import privateChatConvs from "../conversation/privateChat/index.js";
import { privateChatCommands } from "../command/privateChat/index.js";
import {
  regCommandsToComposer,
  regConvsToComposer
} from "../helper/composer.js";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(
  lazySession({
    initial: (): MySessionData<"private"> => ({})
  })
);

privateChatComposer.use(i18n);
privateChatComposer.use(conversations());

regConvsToComposer(privateChatComposer, privateChatConvs);
regCommandsToComposer(privateChatComposer, privateChatCommands);

export default privateChatComposer;
