const TagsModel = require('../../model/tagsModel');

exports.createTag = async (ctx, next) => {
  const params = ctx.request.body;
  const sessionUser = ctx.session.user;
  const data = await TagsModel.create({
    ownerId: sessionUser._id,
    label: params.label,
    createTime: params.createTime,
    followers: 0,
    count: 0
  });
  ctx.body = {
    code: 0,
    message: '标签创建成功',
    data: data
  };
};
