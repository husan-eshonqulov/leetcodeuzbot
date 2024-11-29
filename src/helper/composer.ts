import { createConversation } from "@grammyjs/conversations";
import MyCommandDetail from "../types/command";
import MyComposer from "../types/composer";
import { MyConvDetail } from "../types/conversation";
import { MyCbQuery } from "../types/query";
// import MyContext from "../types/context";

export const regConvsToComposer = (
  composer: MyComposer,
  conversations: MyConvDetail[]
) => {
  conversations.forEach((conversation) =>
    composer.use(createConversation(conversation.builder, conversation.title))
  );
};

export const regCommandsToComposer = (
  composer: MyComposer,
  commands: MyCommandDetail[]
) => {
  commands.forEach((command) =>
    composer.command(command.command, command.commandFn)
  );
};

export const regCbQueriesToComposer = (
  composer: MyComposer,
  cbQueries: MyCbQuery[]
) => {
  cbQueries.forEach(({ pattern, handler }) =>
    composer.callbackQuery(pattern, handler)
  );
};
