import { Composer, lazySession } from "grammy";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import { privateChatCommands } from "../handler/command/privateChat/index.js";
import { cbQueries } from "../handler/cbQuery/index.js";
import {
  regCommandsToComposer,
  regCbQueriesToComposer
} from "../helper/composer.js";
import { ChatType } from "../types/enum";

const privateChatComposer = new Composer<MyContext>();

privateChatComposer.use(
  lazySession({
    initial: (): MySessionData<ChatType.private> => ({})
  })
);

privateChatComposer.use(i18n);

regCommandsToComposer(privateChatComposer, privateChatCommands);
regCbQueriesToComposer(privateChatComposer, cbQueries);

export default privateChatComposer;
