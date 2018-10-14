const UserModel = require('../../model/userModel');

exports.createUser = async (ctx, next) => {
  const params = ctx.request.body;
  const result = await UserModel.create({
    username: params.username,
    password: params.password
  });
  ctx.body = result;
};
