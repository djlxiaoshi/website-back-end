const UserModel = require('../../model/userModel');

exports.updateUser = async (ctx, next) => {
  const params = ctx.request.body;
  const userMsg = {
    username: params.username,
    password: params.password
  };
  const result = await UserModel.findByIdAndUpdate(params.id, userMsg);
  ctx.body = result;
};
