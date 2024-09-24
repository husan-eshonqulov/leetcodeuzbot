import MyCommand, { MyCommandFn } from "../types/command.js";

const startCommandFn: MyCommandFn = async (ctx) => {
  await ctx.reply("Ro'yxatdan o'tish uchun /register buyrug'idan foydalaning.");
};

const startCommand: MyCommand = {
  command: "start",
  description: "botni ishga tushurish",
  commandFn: startCommandFn
};

export default startCommand;
