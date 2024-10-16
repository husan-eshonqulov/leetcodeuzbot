import { createConversation } from "@grammyjs/conversations";
import type MyCommand from "../types/command.d.ts";
import type MyConversation from "../types/conversation.d.ts";
import type MyComposer from "../types/composer.d.ts";

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
