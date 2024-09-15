import bot from "./bot/index.js";
import defineAssociations from "./models/association.js";
import { connectDb } from "./util/db.js";

const bootstrap = () => {
  defineAssociations();
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
