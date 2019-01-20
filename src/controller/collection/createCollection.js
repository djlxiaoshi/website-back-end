const CollectionModel = require('../../model/collectionModel');

exports.createCollection = async (ctx, next) => {
  const params = ctx.request.body;
  const sessionUser = ctx.session.user;
  const data = await CollectionModel.create({
    ownerId: sessionUser._id,
    title: params.title,
    abstract: params.abstract,
    url: params.url,
    source: params.source,
    createTime: params.createTime,
    tags: params.tags
  });
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
