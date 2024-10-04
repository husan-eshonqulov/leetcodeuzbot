import bot from "../bot/bot.js";
import config from "../config/config.js";
import User from "../models/user.js";

export const tagRistrictedUsers = async (users: User[]) => {
  const tagedUsers = users.map((user) =>
    user.username
      ? `@${user.username}`
      : `[${user.firstname}](tg://user?id=${user.id})`
  );

  const message = `${tagedUsers.join(", ")} iltimos, masala yechishda davom etingizlar!`;
  await bot.api.sendMessage(config.groupId, message, {
    parse_mode: "MarkdownV2"
  });
};
