const CollectionModel = require('../../model/collectionModel');

exports.updateCollection = async (ctx, next) => {
  const params = ctx.request.body;
  const sessionUser = ctx.session.user;
  const data = await CollectionModel.update({ownerId: sessionUser._id, _id: params._id}, {
    title: params.title,
    abstract: params.abstract,
    url: params.url,
    source: params.source,
    lastModifyTime: params.lastModifyTime,
    tags: params.tags
  });
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
