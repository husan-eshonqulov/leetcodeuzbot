import { Composer } from "grammy";
import type MyContext from "../types/context.d.ts";
import { registerCommands } from "../util/composer.js";
import groupCommands from "../command/group/index.js";
import { userJoinHandler, userLeftHandler } from "../event/event.js";

const groupChatComposer = new Composer<MyContext>();

registerCommands(groupChatComposer, groupCommands);

groupChatComposer.on(":new_chat_members", userJoinHandler);
groupChatComposer.on(":left_chat_member", userLeftHandler);

export default groupChatComposer;
