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

  from.id == + process.env.ABUSE_TARGET_ID
    && bot.sendMessage(chat.id, getAbusePhrase());

  text && text.startsWith('https://9gag.com/')
    && bot.sendMessage(chat.id, getFuck9GAGPhrases());
});

bot.sendMessage(process.env.ROOT_ID, "Hello! I'm started", { disable_notification: true });

bot.on('polling_error', msg => console.log(msg));

app.listen(process.env.APP_PORT, () => console.log(`Server works on ${process.env.APP_PORT}`));

/**
 *
  {
    message_id: number,
    from: {
      id: number,
      is_bot: boolean,
      first_name: string,
      last_name: string,
      username: string,
      language_code: 'uk'
    },
    chat: {
      id: number,
      first_name: string,
      last_name: string,
      username: string,
      type: 'private'
    },
    date: 1592311566,
    text: 'hello'
  }
 */