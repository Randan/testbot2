const usersController = require('../controllers/users');
// const getSubscriber = require('../middlewares/users').getSubscriber;

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_API, { polling: true });

bot.onText(/\/help/, msg => usersController.help(msg));
bot.onText(/\/whoAmI/, msg => usersController.whoAmI(msg));

// bot.get(
//     '/:id',
//     getSubscriber,
//     usersController.getById
// );

module.exports = bot;