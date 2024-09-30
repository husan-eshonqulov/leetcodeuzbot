import { connectDb } from "./util/db.js";
import bot from "./bot/bot.js";

const bootstrap = () => {
  bot.start({
    onStart: () =>
      console.log(`https://t.me/${bot.botInfo.username} started...`)
  });
};

connectDb()
  .then(bootstrap)
  .catch((err) => {
    throw err;
  });
