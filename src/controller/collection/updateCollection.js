const CollectionModel = require('../../model/collectionModel');
const tagsModel = require('../../model/tagsModel');

exports.updateCollection = async (ctx, next) => {
  const params = ctx.request.body;
  const sessionUser = ctx.session.user;
  const data = await CollectionModel.update({ownerId: sessionUser._id, _id: params._id}, {
    title: params.title,
    abstract: params.abstract,
    url: params.url,
    source: params.source,
    lastModifyTime: params.lastModifyTime
  });

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};

exports.changeTags = async (ctx, next) =>  {

};
