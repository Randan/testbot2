const mongoose = require('mongoose');
const User = require('./user');

const companySchema = new.mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  users: [User]
});

module.exports = mongoose.model('Company', companySchema);