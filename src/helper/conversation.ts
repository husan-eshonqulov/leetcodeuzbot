import type MyContext from "../types/context";
import type { MyConversationType } from "../types/conversation";
import type { FixedLenArr } from "../types/util";
import yesNo from "../keyboard/yesNo.js";

// Get firstname within conversation
export const getFirstname = async (con: MyConversationType, ctx: MyContext) => {
  return promptInput(con, ctx, "Ismingizni kiriting: ");
};

// Get lastname within conversation
export const getLastname = async (con: MyConversationType, ctx: MyContext) => {
  return promptInput(con, ctx, "Familiyangizni kiriting: ");
};

// Get leetcode username within conversation
export const getProfile = async (con: MyConversationType, ctx: MyContext) => {
  return promptInput(con, ctx, "Leetcode username kiriting: ");
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
  return answer.toLowerCase().trim();
};

const promptInput = async (
  con: MyConversationType,
  ctx: MyContext,
  msg: string
) => {
  await ctx.reply(msg);
  const inputCtx = await con.waitFor(":text");
  return inputCtx.msg.text;
};
