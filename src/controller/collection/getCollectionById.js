const CollectionModel = require('../../model/collectionModel');

exports.getCollectionById = async (ctx, next) => {
  const params = ctx.params; // 获取路径参数
  const data = await CollectionModel.findById(params.id, '_id tags title abstract url createTime lastModifyTime');
  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
