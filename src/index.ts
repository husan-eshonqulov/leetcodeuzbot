import bot from "./bot/bot.js";

const bootstrap = () => {
  bot.start({
    onStart: () => {
      console.log(`https://t.me/${bot.botInfo.username} bot started...`);
    }
  });
};

bootstrap();
