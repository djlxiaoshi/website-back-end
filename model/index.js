var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/website', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('链接成功')
});