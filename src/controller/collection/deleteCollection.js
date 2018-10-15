const CollectionModel = require('../../model/collectionModel');

exports.deleteCollection = async (ctx, next) => {

  const params = ctx.params; // 获取路径参数
  const data = await CollectionModel.findByIdAndRemove(params.id);
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
