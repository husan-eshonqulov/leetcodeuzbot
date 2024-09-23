import bot from "./bot/index.js";
import setAssociations from "./models/association.js";
import { connectDb } from "./util/db.js";

setAssociations();

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
