const CollectionModel = require('../../model/collectionModel');
const TagModel = require('../../model/tagsModel');

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

  //
  const tags = await TagModel.find({ownerId: sessionUser._id});

  tags.forEach(tag => {
    if (params.tags.includes(tag._id.toString())) {
      tag.collections.push(data._id.toString());
      tag.save();
    }
  });

  ctx.body = {
    code: 0,
    message: 'success',
    data: data
  };
};
