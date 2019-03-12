const TagModel = require('../../model/tagsModel');
const ObjectId = require('mongodb').ObjectID;

exports.getTagById = async (ctx, next) => {
  const params = ctx.request.query; // 获取路径参数
  const sessionUser = ctx.session.user;
  const data = await TagModel.aggregate([
    {$match: {
        ownerId: sessionUser._id,
        _id: ObjectId(params.tagId)
      }
    },
    {$limit: 1},
    {$project: {
        _id: 0,
        label: 1,
        followers: 1,
        collectionsCount: {'$size': '$collections'}
      }
    }
    ]);

  ctx.body = {
    code: 0,
    message: 'success',
    data: data[0]
  };
};
