const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库连接成功!')
});