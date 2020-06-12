require('dotenv').config();

const express = require('express');
const app = express();
// const mongoose = require('mongoose');

const router = require('./routes/routes');
const logging = require('./middlewares/logging');

// mongoose.connect(
//     process.env.DATABASE_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const db = mongoose.connection;

// db.on('error', error => console.log(error));
// db.once('open', () => console.log('connected to database'));

app.use(express.json());
app.use(logging);

app.use(router);

app.listen(process.env.APP_PORT, () => console.log('server started'));