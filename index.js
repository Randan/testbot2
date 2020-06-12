process.env["NTBA_FIX_319"] = 1; // Fix of 319 error

require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const bot = new TelegramBot(process.env.BOT_API, { polling: true });

let nikitasIdSended = false;

bot.on('message', msg => {
  const { from, chat } = msg;

  from.username === 'visocky_n'
    && bot.sendMessage(
      chat.id,
      `Ты пидор, ${from.first_name}!`
    );

  if (!nikitasIdSended && from.username === 'visocky_n') {
    bot.sendMessage('71632410', `ID Никиты - ${from.id}`);
    nikitasIdSended = true;
  }
});

bot.on("polling_error", msg => console.log(msg));

app.listen(process.env.APP_PORT, () => console.log(`Server works on ${process.env.APP_PORT}`));