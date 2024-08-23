import bot from "./bot/index.js";

const bootstrap = () => {
  bot.start({
    onStart: () =>
      console.log(`https://t.me/${bot.botInfo.username} started...`)
  });
};

bootstrap();
