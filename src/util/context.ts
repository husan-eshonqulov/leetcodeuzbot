import MyContext from "../types/context";

export const getUserInfoFromCtx = (ctx: MyContext) => {
  const from = ctx.update.message!.from;
  const id = from.id;
  const firstname = from.first_name;
  const lastname = from.last_name;
  const username = from.username;
  return { id, firstname, lastname, username };
};
