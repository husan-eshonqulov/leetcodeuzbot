import cron from "node-cron";
import bot from "./bot/bot.js";
import connectDb from "./util/connectDb.js";
import updUsrPermissions from "./cron/updUsrPermissions.js";

const bootstrap = () => {
  bot.start({
    onStart: () => {
      console.log(`https://t.me/${bot.botInfo.username} bot has started...`);
      cron.schedule("01 00 * * *", updUsrPermissions, {
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
