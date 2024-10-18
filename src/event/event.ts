import type MyContext from "../types/context";
import { User } from "../model/index.js";

export const userJoinHandler = async (ctx: MyContext) => {
  const newMembers = ctx.update.message!.new_chat_members!;

  newMembers.forEach(async (member) => {
    const { id, first_name: firstname, last_name: lastname, username } = member;
    const user = await User.findByPk(id);

    if (user) {
      user.set({ firstname, lastname, username, isMember: true });
      await user.save();
    } else {
      await User.create({ id, firstname, lastname, username, isMember: true });
    }
  });
};

export const userLeftHandler = async (ctx: MyContext) => {
  const {
    id,
    first_name: firstname,
    last_name: lastname,
    username
  } = ctx.update.message!.left_chat_member!;
  const user = await User.findByPk(id);
  if (user) {
    user.set({ firstname, lastname, username, isMember: false });
    await user.save();
  }
};
