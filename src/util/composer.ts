import { createConversation } from "@grammyjs/conversations";
import MyCommand from "../types/command.js";
import MyConversation from "../types/conversation.js";
import MyComposer from "../types/composer.js";

// Register commands to composer
export const registerCommands = (
  composer: MyComposer,
  commands: MyCommand[]
) => {
  commands.forEach((command) =>
    composer.command(command.command, command.commandFn)
  );
};

// Register conversations to composer
export const registerConversations = (
  composer: MyComposer,
  conversations: MyConversation[]
) => {
  conversations.forEach((conversation) =>
    composer.use(createConversation(conversation.builder, conversation.title))
  );
};
