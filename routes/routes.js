const usersController = require('../controllers/users');
// const getSubscriber = require('../middlewares/users').getSubscriber;

bot.onText(/\/help/, msg => usersController.help(msg));
bot.onText(/\/whoAmI/, msg => usersController.whoAmI(msg));

// router.get(
//     '/:id',
//     getSubscriber,
//     usersController.getById
// );

module.exports = router;