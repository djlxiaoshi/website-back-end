// 用户信息数据模型

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TagSchema = new Schema({
  ownerId: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  collections: [{
    type: String,
    ref: 'collection'
  }],
  followers: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('tag', TagSchema);
