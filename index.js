process.env['NTBA_FIX_319'] = 1; // Fix of 319 error

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const getAbusePhrase = require('./getAbusePhrase');
const getFuck9GAGPhrases = require('./getFuck9GAGPhrases');

const app = express();
const bot = new TelegramBot(process.env.BOT_API, { polling: true });

bot.on('message', msg => {
  const { from, chat, text } = msg;

  from.id === process.env.ABUSE_TARGET_ID
    && bot.sendMessage(chat.id, getAbusePhrase());

  text.startsWith('https://9gag.com/')
    && bot.sendMessage(chat.id, getFuck9GAGPhrases());
});

bot.sendMessage(process.env.ROOT_ID, 'Hello! This is the TEST', { disable_notification: true });

bot.on('polling_error', msg => console.log(msg));

app.listen(process.env.APP_PORT, () => console.log(`Server works on ${process.env.APP_PORT}`));