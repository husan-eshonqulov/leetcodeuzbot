import type MyCommand from "../types/command.js";
import type { MyCommandFunc } from "../types/command.js";

const registerFn: MyCommandFunc = async (ctx) => {
  await ctx.conversation.enter("registerUser");
};

const register: MyCommand = {
  command: "register",
  description: "register user",
  commandFunc: registerFn
};

export default register;
