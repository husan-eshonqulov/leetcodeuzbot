import MyContext from "../types/context.js";
import MyConversation, { MyConversationType } from "../types/conversation.js";
import { getProfile, confirmInfo } from "../helpers/conversation.js";
import User from "../models/user.js";

const registerUserBuilder = async (con: MyConversationType, ctx: MyContext) => {
  const from = ctx.from!;
  const id = from.id;
  const firstname = from.first_name;
  const lastname = from.last_name;
  const username = from.username;
  const profile = await getProfile(con, ctx);
  const answer = await confirmInfo(
    con,
    ctx,
    ["Ism", "Leetcode username"],
    [`${firstname} ${lastname}`, profile]
  );

  if (answer !== "ha") {
    return ctx.reply("So'rov bekor qilindi");
  }

  const user = await User.findByPk(id);

  if (user) {
    user.set({ username, firstname, lastname, profile });
    await user.save();
    return await ctx.reply("O'zgarishlar saqlandi");
  } else {
    await User.create({
      id,
      firstname,
      lastname,
      username,
      profile,
      isMember: false
    });
    return await ctx.reply("User ro'yxatga olindi");
  }
};

const registerUser: MyConversation = {
  title: "registerUser",
  builder: registerUserBuilder
};

export default registerUser;
