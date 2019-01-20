const CollectionModel = require('../../model/collectionModel');

exports.getAllCollections = async (ctx, next) => {
  const sessionUser = ctx.session.user;
  const data = await CollectionModel.find({ ownerId: sessionUser._id }, '_id tags title abstract url createTime lastModifyTime');
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
