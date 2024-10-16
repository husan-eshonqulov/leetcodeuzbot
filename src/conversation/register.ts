import type MyContext from "../types/context.d.ts";
import type MyConversation from "../types/conversation.d.ts";
import type { MyConversationType } from "../types/conversation.d.ts";
import { getProfile, confirmInfo } from "../helper/conversation.js";
import { User } from "../model/index.js";

const registerUserBuilder = async (con: MyConversationType, ctx: MyContext) => {
  const from = ctx.from!;
  const id = from.id;
  const firstname = from.first_name;
  const lastname = from.last_name;
  const username = from.username;
  const profile = await getProfile(con, ctx);
  const answer = await confirmInfo(con, ctx, ["Leetcode username"], [profile]);

  if (answer !== "ha") {
    return ctx.reply("So'rov bekor qilindi", {
      reply_markup: { remove_keyboard: true }
    });
  }

  const user = await User.findByPk(id);

  if (user) {
    user.set({ username, firstname, lastname, profile });
    await user.save();
    return ctx.reply("O'zgarishlar saqlandi", {
      reply_markup: { remove_keyboard: true }
    });
  } else {
    await User.create({
      id,
      firstname,
      lastname,
      username,
      profile,
      isMember: false
    });
    return ctx.reply(
      "User ro'yxatga olindi\nGuruhga qo'shilish: https://t.me/leetcodeChallangeUz",
      { reply_markup: { remove_keyboard: true } }
    );
  }
};

const registerUser: MyConversation = {
  title: "registerUser",
  builder: registerUserBuilder
};

export default registerUser;
