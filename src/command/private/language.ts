import MyCommand from "../../types/command";
import { MyCommandFn } from "../../types/command";

const languageCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.conversation.enter("changeLangConversation");
};

const languageCommand: MyCommand = {
  command: "language",
  description: "tilni almashtirish",
  commandFn: languageCommandFn
};

export default languageCommand;
