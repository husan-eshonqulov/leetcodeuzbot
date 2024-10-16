import type MyCommand from "../../types/command";
import type { MyCommandFn } from "../../types/command";

const registerCommandFn: MyCommandFn = async (ctx) => {
  await ctx.conversation.enter("registerUser");
};

const registerCommand: MyCommand = {
  command: "register",
  description: "ro'yxatdan o'tish",
  commandFn: registerCommandFn
};

export default registerCommand;
