const CollectionModel = require('../../model/collectionModel');

exports.getCollectionsByTagId = async (ctx, next) => {
  const params = ctx.request.query; // 获取路径参数
  const sessionUser = ctx.session.user;
  const data = await CollectionModel.find({
    ownerId: sessionUser._id,
    tags: {$all: [params.tagId]}
  }, '_id tags title abstract url').
  populate('tags', 'label');

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
