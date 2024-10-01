import MyCommand, { MyCommandFn } from "../../types/command.js";

const registerCommandFn: MyCommandFn = async (ctx) => {
  await ctx.conversation.enter("registerUser");
};

const registerCommand: MyCommand = {
  command: "register",
  description: "ro'yxatdan o'tish",
  commandFn: registerCommandFn
};

export default registerCommand;
