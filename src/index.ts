import cron from "node-cron";
import bot from "./bot/bot.js";
import connectDb from "./util/connectDb.js";
import updUsrPerms from "./cron/updUsrPerms.js";

const bootstrap = () => {
  bot.start({
    onStart: () => {
      console.log(`https://t.me/${bot.botInfo.username} bot has started...`);
      cron.schedule("01 00 * * *", updUsrPerms, {
        timezone: "UTC"
      });
    }
  });
};

connectDb()
  .then(bootstrap)
  .catch((err) => {
    throw err;
  });
