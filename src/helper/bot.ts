import MyBot from "../types/bot";
import MyCommand from "../types/command";
import { CommandType } from "../command/type.js";

export const setCommandMenu = (
  bot: MyBot,
  commands: MyCommand[],
  type: "private" | "supergroup"
) => {
  bot.api.setMyCommands(commands, {
    scope: {
      type: type === "private" ? CommandType.private : CommandType.supergroup
    }
  });
};
