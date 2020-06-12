process.env['NTBA_FIX_319'] = 1; // Fix of 319 error

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cron = require('node-cron');

const getAbusePhrase = require('./getAbusePhrase');

const app = express();
const bot = new TelegramBot(process.env.BOT_API, { polling: true });

bot.on('message', msg => {
  const { from, chat } = msg;

  // from.id === process.env.ABUSE_TARGET_ID && bot.sendMessage(chat.id, getAbusePhrase(), 'Markdown', null, true);

  bot.sendMessage(process.env.ROOT_ID, `${from.first_name} ${from.last_name} (@${from.username}) [${from.id}]`, 'Markdown', null, true);
});

bot.on('polling_error', msg => console.log(msg));

app.listen(process.env.APP_PORT, () => console.log(`Server works on ${process.env.APP_PORT}`));

cron.schedule('14 1 * * *', () => {
  bot.sendMessage(`${process.env.CHAT_ID}`, '/pidor@SublimeBot', 'Markdown', null, true);
}, {
  scheduled: true,
  timezone: process.env.TIMEZONE
});