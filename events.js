require('dotenv').config();
const bot = require('./lib/telegramBot');
const controller = require('./controllers');

controller.sendAwakeMessage(process.env.ROOT_ID);

bot.on('message', msg => {
  const { from, chat, text } = msg;

  if (process.env.ABUSE_TARGET_ID && process.env.ABUSE_TARGET_ID !== '') {
    from.id == + process.env.ABUSE_TARGET_ID
      && controller.sendAbuseMessage(chat.id);
  }

  text && text.startsWith('https://9gag.com/')
    && controller.send9GAGAbuseMessage(chat.id);
});

bot.onText(/\/test/, () => controller.sendTestMessage(process.env.ROOT_ID));

bot.on('polling_error', msg => controller.sendTestMessage(msg, process.env.ROOT_ID));