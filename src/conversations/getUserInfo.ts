import { createConversation } from "@grammyjs/conversations";
import MyContext from "../types/context.js";
import MyConversation from "../types/conversation.js";
import yesNo from "../keyboards/custom/yesNo.js";
import { connectDb } from "../util/index.js";

const getUserInfo = createConversation(
  async (con: MyConversation, ctx: MyContext) => {
    await ctx.reply("Ism-familiyangizni kiriting: ");
    const nameCtx = await con.waitFor(":text");
    const name = nameCtx.msg.text;
    await ctx.reply("LeetCode username kiriting: ");
    const usernameCtx = await con.waitFor(":text");
    const username = usernameCtx.msg.text;
    await ctx.reply(
      `Ma'lumotlar to'g'rimi?\nIsm-familiya: ${name}\nLeetcode username: ${username}`,
      {
        reply_markup: yesNo
      }
    );
    const answerCtx = await con.waitFor(":text");
    const answer = answerCtx.msg.text.toLowerCase();
    if (!(answer === "ha" || answer === "yo'q")) {
      return;
    }
    if (answer === "ha") {
      const {
        id: tg_id,
        is_bot,
        first_name,
        last_name,
        username: tg_username
      } = ctx.update.message!.from;
      const db = connectDb();
      console.log(tg_username);
      db.all(
        `SELECT * FROM users WHERE tg_username = "${tg_username}"`,
        async (err, [user]) => {
          if (err) {
            return console.error(err);
          }
          if (!user) {
            db.run(
              "INSERT INTO users (tg_id, is_bot, first_name, last_name, tg_username, lc_username) VALUES (?, ?, ?, ?, ?, ?)",
              [tg_id, is_bot, first_name, last_name, tg_username, username]
            );
            return await ctx.reply("O'zgarishlar saqlandi.", {
              reply_markup: { remove_keyboard: true }
            });
          } else {
            await ctx.reply(`${tg_username} user already exist`);
          }
        }
      );
    } else {
      return await ctx.reply("O'zgarishlar bekor qilindi.", {
        reply_markup: { remove_keyboard: true }
      });
    }
  },
  "getUserInfo"
);

export default getUserInfo;
