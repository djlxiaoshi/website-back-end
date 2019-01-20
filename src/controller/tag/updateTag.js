const TagsModel = require('../../model/tagsModel');
const setTagsCount = require('./common');

exports.updateCollection = async (ctx, next) => {
  const params = ctx.request.body;
  const sessionUser = ctx.session.user;

  const data = await TagsModel.findOne({ownerId: sessionUser._id, _id: params._id}, {

  });
  data.count = params.status ? data.count + 1 : data.count - 1;
  data.save();

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
