import MyContext from "../types/context.js";
import MyConversation, { MyConversationType } from "../types/conversation.js";
import { getLcUsername, confirmInfo } from "../helpers/conversation.js";
import { getLastSubmissionDate } from "../util/api.js";
import User from "../models/user.js";

const registerUserBuilder = async (con: MyConversationType, ctx: MyContext) => {
  const from = ctx.from!;
  const id = from.id;
  const firstname = from.first_name;
  const lastname = from.last_name;
  const username = from.username;
  const lcUsername = await getLcUsername(con, ctx);
  const answer = await confirmInfo(
    con,
    ctx,
    ["Ism", "Leetcode username"],
    [`${firstname} ${lastname}`, lcUsername]
  );

  if (answer !== "ha") {
    return ctx.reply("So'rov bekor qilindi");
  }

  const user = await User.findByPk(id);
  const lastSub = await getLastSubmissionDate(lcUsername);

  if (user) {
    user.set({ username, firstname, lastname });
    await user.save();
    const profile = await user.getProfile();
    profile.set({ username: lcUsername, lastSubmission: lastSub });
    await profile.save();
    return await ctx.reply("O'zgarishlar saqlandi");
  } else {
    const newUser = await User.create({ id, username, firstname, lastname });
    await newUser.createProfile({
      username: lcUsername,
      lastSubmission: lastSub,
      userId: newUser.id
    });
    return await ctx.reply("User ro'yxatga olindi");
  }
};

const registerUser: MyConversation = {
  title: "registerUser",
  builder: registerUserBuilder
};

export default registerUser;
