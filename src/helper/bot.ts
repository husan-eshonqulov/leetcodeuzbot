import MyBot from "../types/bot";
import MyCommandDetail from "../types/command";
import { CommandType } from "../types/enum.js";

export const setCommandMenu = (
  bot: MyBot,
  commands: MyCommandDetail[],
  commandType: CommandType
) => {
  bot.api.setMyCommands(commands, {
    scope: { type: commandType }
  });
};
