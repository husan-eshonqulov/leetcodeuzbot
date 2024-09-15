import type MyCommand from "../types/command.js";
import type { MyCommandFunc } from "../types/command.js";

const startFn: MyCommandFunc = async (ctx) => {
  await ctx.reply("use /register command for registeration");
};

const start: MyCommand = {
  command: "start",
  description: "this is start command",
  commandFunc: startFn
};

export default start;
