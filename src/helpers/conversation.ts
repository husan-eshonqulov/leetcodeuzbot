import MyContext from "../types/context.js";
import { MyConversationType } from "../types/conversation.js";
import { FixedLenArr } from "../types/util.js";
import yesNo from "../keyboards/custom/yesNo.js";

// Get firstname within conversation
export const getFirstname = async (con: MyConversationType, ctx: MyContext) => {
  await ctx.reply("Ismingizni kiriting: ");
  const firstnameCtx = await con.waitFor(":text");
  return firstnameCtx.msg.text;
};

// Get lastname within conversation
export const getLastname = async (con: MyConversationType, ctx: MyContext) => {
  await ctx.reply("Familiyangizni kiriting: ");
  const lastnameCtx = await con.waitFor(":text");
  return lastnameCtx.msg.text;
};

// Get leetcode username within conversation
export const getProfile = async (con: MyConversationType, ctx: MyContext) => {
  await ctx.reply("Leetcode username kiriting: ");
  const profileCtx = await con.waitFor(":text");
  return profileCtx.msg.text;
};

// Confirm info true or false within conversation
export const confirmInfo = async <
  T extends number,
  U extends FixedLenArr<string, T>
>(
  con: MyConversationType,
  ctx: MyContext,
  titles: U,
  info: NoInfer<U>
) => {
  const question = titles.reduce(
    (ques, title, ind) => (ques += `${title}: ${info[ind]}\n`),
    "Ma'lumotlaringizni to'g'rimi?\n"
  );
  await ctx.reply(question, { reply_markup: yesNo });
  const answerCtx = await con.waitFor(":text");
  const answer = answerCtx.msg.text;
  return answer.toLowerCase();
};
