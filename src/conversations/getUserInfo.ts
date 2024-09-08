import { createConversation } from "@grammyjs/conversations";
import MyContext from "../types/context.js";
import MyConversation from "../types/conversation.js";
import yesNo from "../keyboards/custom/yesNo.js";

const getUserInfo = createConversation(
  async (con: MyConversation, ctx: MyContext) => {
    await ctx.reply("Ism-familiyangizni kiriting: ");
    const nameCtx = await con.waitFor(":text");
    const name = nameCtx.msg.text;
    await ctx.reply("LeetCode username kiriting: ");
    const usernameCtx = await con.waitFor(":text");
    const username = usernameCtx.msg.text;
    await ctx.reply(
      `Ma'lumotlar to'g'rimi?\nIsm-familiya: ${name}\nLeetcode username: ${username}`,
      {
        reply_markup: yesNo
      }
    );
    const answerCtx = await con.waitFor(":text");
    const answer = answerCtx.msg.text.toLowerCase();
    if (!(answer === "ha" || answer === "yo'q")) {
      return;
    }
    if (answer === "ha") {
      return await ctx.reply("O'zgarishlar saqlandi.", {
        reply_markup: { remove_keyboard: true }
      });
    } else {
      return await ctx.reply("O'zgarishlar bekor qilindi.", {
        reply_markup: { remove_keyboard: true }
      });
    }
  },
  "getUserInfo"
);

export default getUserInfo;
