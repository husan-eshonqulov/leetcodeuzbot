import MyContext from "../types/context.js";

const echo = async (ctx: MyContext) => {
  console.log(ctx.update);
  if (ctx.message?.text) {
    await ctx.reply(ctx.message.text);
  }
};

export default echo;
