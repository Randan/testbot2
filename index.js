process.env["NTBA_FIX_319"] = 1; // Fix of 319 error

require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const bot = new TelegramBot(process.env.BOT_API, { polling: true });

bot.on('message', msg => {
  console.log(msg);
  const { from, chat } = msg;
  username === 'randan'
    && bot.sendMessage(
      chat.id,
      `Ты пидор, ${from.first_name}!`
    );
})
// bot.onText(/\/help/, msg => {
//   const { id, first_name, last_name, username } = msg.from;

//   bot.sendMessage(
//     id,
//     `Hello, ${first_name}! And Fuck you!\n`
//   );
// });

// bot.onText(/\/whoAmI/, msg => {
//   const { id, first_name, last_name, username } = msg.from;

//   bot.sendMessage(
//     id,
//     `Hello, ${first_name}! And Fuck you!\n`
//     + `You are\n`
//     + `${id}\n`
//     + `${first_name}\n`
//     + `${last_name}\n`
//     + `${username}\n`
//   );
// });

// bot.onText(/\/buttons/, function (msg) {
//   const opts = {
//     reply_to_message_id: msg.message_id,
//     reply_markup: JSON.stringify({
//       keyboard: [
//         ['first button'],
//         ['second button']
//       ]
//     })
//   };
//   bot.sendMessage(msg.chat.id, 'Buttons?', opts);
// });

app.listen(process.env.APP_PORT, () => console.log(`Server works on ${process.env.APP_PORT}`));