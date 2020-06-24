process.env['NTBA_FIX_319'] = 1; // Fix of 319 error

require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('This is a Zhossko Telegram Bot');
});

require('./events')

app.listen(process.env.APP_PORT, () => console.log(`Server works on ${process.env.APP_PORT}`));