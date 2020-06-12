process.env["NTBA_FIX_319"] = 1; // Fix of 319 error

require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const token = process.env.BOT_API;
const PORT = process.env.PORT;

const app = express();
const bot = new TelegramBot(token, { polling: true });

const nowTime = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  return `${h}:${m}:${s}`;
};

bot.onText(/\/help/, msg => {
  const { id, first_name, last_name, username } = msg.from;

  bot.sendMessage(
    id,
    `Hello, ${first_name}! And Fuck you!\n`
  );
  console.log(`${nowTime()} ${first_name} ${last_name} (${username}) [${id}] asked for help`);
});

bot.onText(/\/whoAmI/, msg => {
  const { id, first_name, last_name, username } = msg.from;

  bot.sendMessage(
    id,
    `Hello, ${first_name}! And Fuck you!\n`
    + `You are\n`
    + `${id}\n`
    + `${first_name}\n`
    + `${last_name}\n`
    + `${username}\n`
    + "```"+ msg +"```"
  );
  console.log(`${nowTime()} ${first_name} ${last_name} (${username}) [${id}] asked for help`);
  console.log(msg);
});

app.listen(PORT, () => console.log(`Server works on ${PORT}`));