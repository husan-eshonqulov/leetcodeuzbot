import { createConversation } from "@grammyjs/conversations";
import MyCommand from "../types/command";
import MyComposer from "../types/composer";
import { ConversationDetails } from "../types/conversation";

export const registerConverstionsToComposer = (
  composer: MyComposer,
  conversations: ConversationDetails[]
) => {
  conversations.forEach((conversation) =>
    composer.use(createConversation(conversation.builder, conversation.title))
  );
};

export const registerCommandsToComposer = (
  composer: MyComposer,
  commands: MyCommand[]
) => {
  commands.forEach((command) =>
    composer.command(command.command, command.commandFn)
  );
};
