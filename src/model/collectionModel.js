const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  source: {
    type: String,
  },
  createTime: {
    type: String,
    required: true
  },
  lastModifyTime: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('collection', CollectionSchema);