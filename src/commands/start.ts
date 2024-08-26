import MyContext from "../types/context";

const startCommand = async (ctx: MyContext) => {
  await ctx.reply("hi!");
};

export default startCommand;
