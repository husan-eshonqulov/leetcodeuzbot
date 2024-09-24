import MyContext from "../types/context.js";
import { MyConversationType } from "../types/conversation.js";
import { FixedLenArr } from "../types/index.js";
import yesNo from "../keyboards/custom/yesNo.js";

// Get firstname within conversation
export const getFirstname = async (con: MyConversationType, ctx: MyContext) => {
  await ctx.reply("Ismingizni kiriting: ");
  const firstnameCtx = await con.waitFor(":text");
  const firstname = firstnameCtx.msg.text;
  return firstname;
};

// Get lastname within conversation
export const getLastname = async (con: MyConversationType, ctx: MyContext) => {
  await ctx.reply("Familiyangizni kiriting: ");
  const lastnameCtx = await con.waitFor(":text");
  const lastname = lastnameCtx.msg.text;
  return lastname;
};

// Get leetcode username within conversation
export const getLcUsername = async (
  con: MyConversationType,
  ctx: MyContext
) => {
  await ctx.reply("Leetcode username'ingizni kiriting: ");
  const lcUsernameCtx = await con.waitFor(":text");
  const lcUsername = lcUsernameCtx.msg.text;
  return lcUsername;
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
