const bot = new TelegramBot(process.env.BOT_API, { polling: true });
// const User = require('../models/user');

module.exports = {
    help: msg => {
        const { id, first_name, last_name, username } = msg.from;

        bot.sendMessage(
            id,
            `Hello, ${first_name}! And Fuck you!\n`
        );
    },

    whoAmI: msg => {
        const { id, first_name, last_name, username } = msg.from;

        bot.sendMessage(
          id,
          `Hello, ${first_name}! And Fuck you!\n`
          + `You are\n`
          + `${id}\n`
          + `${first_name}\n`
          + `${last_name}\n`
          + `${username}\n`
        );
        console.log(`${nowTime()} ${first_name} ${last_name} (${username}) [${id}] asked for help`);
        console.log(msg);
    },
    // help: async (req, res) => {
    //     try {
    //         const users = await User.find();
    //         res.json(users);
    //     } catch(err) {
    //         res.status(500).json({ message: err.message });
    //     }
    // },
};