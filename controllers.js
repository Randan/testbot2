const bot = require('./lib/telegramBot');

const getAbusePhrase = require('./utils/getAbusePhrase');
const get9GAGAbusePhrase = require('./utils/get9GAGAbusePhrase');

const messagesOptions = {
  disable_notification: true
};

module.exports = {
  sendAbuseMessage: chatId => bot.sendMessage(chatId, getAbusePhrase(), { ...messagesOptions }),

  send9GAGAbuseMessage: chatId => bot.sendMessage(chatId, get9GAGAbusePhrase(), { ...messagesOptions }),

  sendTestMessage: chatId => bot.sendMessage(chatId, 'Hello! This is a test message', { ...messagesOptions }),

  sendAwakeMessage: chatId => bot.sendMessage(chatId, "Hello! I'm awake", { ...messagesOptions }),

  sendToChatMessage: (msg, chatId) => bot.sendMessage(chatId, msg.text.substr(msg.entities[0].length + 1), { ...messagesOptions }),

  sendError: (msg, chatId) => {
    console.log(msg);
    bot.sendMessage(chatId, JSON.stringify(msg));
  },
};

/** Example of msg object
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