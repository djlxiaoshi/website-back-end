const CollectionModel = require('../../model/collectionModel');

exports.updateCollection = async (ctx, next) => {
  const params = ctx.request.body;
  const data = await CollectionModel.update({
    title: params.title,
    abstract: params.abstract,
    url: params.url,
    source: params.source,
    time: params.time,
    tags: params.tags
  });
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
