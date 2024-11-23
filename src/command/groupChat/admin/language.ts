import MyCommandDetail from "../../../types/command";
import { MyCommandFn } from "../../../types/command";

const languageCommandFn: MyCommandFn = async (ctx) => {
  return await ctx.conversation.enter("changeLangConv");
};

const languageCommand: MyCommandDetail = {
  command: "language",
  description: "tilni almashtirish",
  commandFn: languageCommandFn
};

export default languageCommand;
