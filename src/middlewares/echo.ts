import type MyContext from "../types/context.js";

const echo = async (ctx: MyContext) => {
  if (ctx.message?.text) {
    await ctx.reply(ctx.message.text);
  }
};

export default echo;
