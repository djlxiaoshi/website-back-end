const TagsModel = require('../../model/tagsModel');

exports.getTagsListByUserId = async (ctx, next) => {
  const sessionUser = ctx.session.user;
  const data = await TagsModel.find({ownerId: sessionUser._id});

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
