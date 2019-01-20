const TagsModel = require('../../model/tagsModel');

exports.setTagsCount = async function (flag, tagName) {
  const result = await TagsModel.findOne({ label: tagName });
  result.count = flag ? result.count + 1 : result.count - 1;
  result.save();
};