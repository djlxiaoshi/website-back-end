const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  ownerId: {
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
    type: String
  },
  lastModifyTime: {
    type: String
  },
  tags: [{ type: String, ref: 'tag' }]
});

module.exports = mongoose.model('collection', CollectionSchema);