import MyCommand from "../types/command.js";
import MyContext from "../types/context.js";

const registerFn = async (ctx: MyContext) => {
  await ctx.conversation.enter("getUserInfo");
};

const register: MyCommand = {
  name: "register",
  desc: "register user",
  func: registerFn
};

export default register;
