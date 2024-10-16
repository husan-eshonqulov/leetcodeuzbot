import type MyCommand from "../../types/command.d.ts";
import type { MyCommandFn } from "../../types/command.d.ts";

const startCommandFn: MyCommandFn = async (ctx) => {
  await ctx.reply("Ro'yxatdan o'tish uchun /register buyrug'idan foydalaning.");
};

const startCommand: MyCommand = {
  command: "start",
  description: "botni ishga tushurish",
  commandFn: startCommandFn
};

export default startCommand;
