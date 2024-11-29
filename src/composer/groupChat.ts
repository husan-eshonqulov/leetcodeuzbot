import { Composer, lazySession } from "grammy";
import MyContext from "../types/context";
import { MySessionData } from "../types/session";
import i18n from "../middleware/i18n.js";
import { groupChatAdminCommands } from "../handler/command/groupChat/index.js";
import { regCommandsToComposer } from "../helper/composer.js";
import { ChatType } from "../types/enum";

const groupChatComposer = new Composer<MyContext>();

groupChatComposer.use(
  lazySession({
    initial: (): MySessionData<ChatType.group> => ({})
  })
);

groupChatComposer.use(i18n);

regCommandsToComposer(groupChatComposer, groupChatAdminCommands);

export default groupChatComposer;
