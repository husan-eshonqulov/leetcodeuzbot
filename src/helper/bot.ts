import MyBot from "../types/bot";
import MyCommand from "../types/command";
import { ChatType, CommandType } from "../types/enum.js";

export const setCommandMenu = (
  bot: MyBot,
  commands: MyCommand[],
  chatType: ChatType
) => {
  let commandType: CommandType;

  switch (chatType) {
    case ChatType.private:
      commandType = CommandType.private;
      break;
    case ChatType.group:
      commandType = CommandType.group;
      break;
  }

  bot.api.setMyCommands(commands, {
    scope: { type: commandType }
  });
};
