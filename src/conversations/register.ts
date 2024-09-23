import type MyContext from "../types/context.js";
import type MyConversation from "../types/conversation.js";
import type { MyConType } from "../types/conversation.js";
import User from "../models/user.js";
import { getLcUsername, confirmInfo } from "../helpers/index.js";

const regUserBuilder = async (con: MyConType, ctx: MyContext) => {
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

  if (user) {
    user.set({ username, firstname, lastname });
    await user.save();
    const profile = await user.getProfile();
    profile.set({ username: lcUsername, lastSubmission: new Date() });
    await profile.save();
    return await ctx.reply("User updated");
  } else {
    const newUser = await User.create({ id, username, firstname, lastname });
    await newUser.createProfile({
      username: lcUsername,
      lastSubmission: new Date(),
      userId: newUser.id
    });
    return await ctx.reply("User ro'yxatga olindi");
  }
};

const registerUser: MyConversation = {
  name: "registerUser",
  builderFunc: regUserBuilder
};

export default registerUser;
