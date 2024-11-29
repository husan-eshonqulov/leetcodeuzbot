import helpCommand from "./help.js";
import languageCommand from "./admin/language.js";

export const groupChatCommands = [helpCommand];
export const groupChatAdminCommands = [...groupChatCommands, languageCommand];
