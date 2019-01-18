const UserModel = require('../../model/userModel');
const path = require('path');

exports.uploadAvatar = async (ctx, next) => {
  const files = ctx.request.files,
    user = ctx.session.user,
    imgPath = ctx.href + /(upload).*/.exec(files.file.path)[0];

  await UserModel.findByIdAndUpdate(user._id, {
    avatar: imgPath
  });

  ctx.body = {
    code: 0,
    data: {path: imgPath},
    message: '上传成功'
  };
};