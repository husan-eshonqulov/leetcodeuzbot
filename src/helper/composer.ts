import { createConversation } from "@grammyjs/conversations";
import MyConversation from "../types/conversation";
import MyCommand from "../types/command";
import MyComposer from "../types/composer";

export const regConverstionsToComposer = (
  composer: MyComposer,
  conversations: MyConversation[]
) => {
  conversations.forEach((conversation) =>
    composer.use(createConversation(conversation.builder, conversation.title))
  );
};

export const regCommandsToComposer = (
  composer: MyComposer,
  commands: MyCommand[]
) => {
  commands.forEach((command) =>
    composer.command(command.command, command.commandFn)
  );
};
