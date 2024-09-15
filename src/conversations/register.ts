import type MyContext from "../types/context.js";
import type MyConversation from "../types/conversation.js";
import type { MyConType } from "../types/conversation.js";
import User from "../models/user.js";
// import Profile from "../models/profile.js";
import { getLcUsername, confirmInfo } from "../helpers/index.js";

const regUserBuilder = async (con: MyConType, ctx: MyContext) => {
  const from = ctx.from!;
  const id = from.id;
  const firstName = from.first_name;
  const lastName = from.last_name;
  // const username = from.username;

  const lcUsername = await getLcUsername(con, ctx);
  const answer = await confirmInfo(
    con,
    ctx,
    ["Ism", "Leetcode username"],
    [`${firstName} ${lastName}`, lcUsername]
  );

  if (!(answer === "ha" || answer === "yo'q") || answer === "yo'q") {
    return ctx.reply("So'rov bekor qilindi");
  }

  const user = await User.findByPk(id);

  if (user) {
    //
  } else {
    //
  }
};

const registerUser: MyConversation = {
  name: "registerUser",
  builderFunc: regUserBuilder
};

export default registerUser;
