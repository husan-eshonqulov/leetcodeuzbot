import { Composer } from "grammy";
import MyContext from "../types/context.js";
import { registerCommands } from "../util/composer.js";
import groupCommands from "../commands/group/index.js";
import { userJoin, userLeft } from "../events/group.js";

const groupChatComposer = new Composer<MyContext>();

registerCommands(groupChatComposer, groupCommands);

groupChatComposer.on(":new_chat_members", userJoin);
groupChatComposer.on(":left_chat_member", userLeft);

export default groupChatComposer;
