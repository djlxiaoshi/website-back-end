const CollectionModel = require('../../model/collectionModel');

exports.deleteCollection = async (ctx, next) => {

  const params = ctx.params; // 获取路径参数
  const sessionUser = ctx.session.user;
  const data = await CollectionModel.findOneAndRemove({
    ownerId: sessionUser._id,
    _id: params.id
  });
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
