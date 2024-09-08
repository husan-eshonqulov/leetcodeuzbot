import MyContext from "../types/context.js";
import MyCommand from "../types/command.js";

const startFn = async (ctx: MyContext) => {
  await ctx.reply("use /register command for registeration");
};

const start: MyCommand = {
  name: "start",
  desc: "this is start command",
  func: startFn
};

export default start;
