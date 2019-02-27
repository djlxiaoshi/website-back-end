const CollectionModel = require('../../model/collectionModel');
const TagModel = require('../../model/tagsModel');

exports.deleteCollection = async (ctx, next) => {

  const params = ctx.params; // 获取路径参数
  const sessionUser = ctx.session.user;

  // 删除文章
  const data = await CollectionModel.findOneAndDelete({
    ownerId: sessionUser._id,
    _id: params.id
  });

  // 修改tag信息
  const tags = await TagModel.find({'collections': {$all:[params.id]}});
  tags.forEach(tag => {
    console.log(tag);
    const index = tag.collections.indexOf(params.id);
    tag.collections.splice(index, 1);
    tag.save();
  });

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
