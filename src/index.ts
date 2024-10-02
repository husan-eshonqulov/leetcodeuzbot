import cron from "node-cron";
import { connectDb } from "./util/db.js";
import bot from "./bot/bot.js";
import updUserPermissions from "./jobs/updUserPermissions.js";

const bootstrap = () => {
  bot.start({
    onStart: () => {
      console.log(`https://t.me/${bot.botInfo.username} started...`);
      cron.schedule("01 00 * * *", updUserPermissions, {
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
