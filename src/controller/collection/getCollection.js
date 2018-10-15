const CollectionModel = require('../../model/collectionModel');

exports.getAllCollections = async (ctx, next) => {
  const data = await CollectionModel.find();
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
