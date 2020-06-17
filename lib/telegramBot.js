require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_API, { polling: true });

module.exports = bot;