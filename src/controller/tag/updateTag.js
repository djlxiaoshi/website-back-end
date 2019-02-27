const TagsModel = require('../../model/tagsModel');

exports.updateTag = async (ctx, next) => {
  const params = ctx.request.body;
  const sessionUser = ctx.session.user;

  const data = await TagsModel.findOne({ownerId: sessionUser._id}, 'label');

  console.log(data);

  data.count = params.status ? data.count + 1 : data.count - 1;
  data.save();

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
