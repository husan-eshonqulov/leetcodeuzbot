import bot from "./bot/index.js";
import { connectDb } from "./util/index.js";
import { createUserTable } from "./helpers/index.js";

const bootstrap = () => {
  const db = connectDb();
  console.log("Connection with SQLite has been established...");
  createUserTable(db);
  bot.start({
    onStart: () =>
      console.log(`https://t.me/${bot.botInfo.username} started...`)
  });
};

bootstrap();
