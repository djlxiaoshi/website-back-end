const UserModel = require('../../model/userModel');

/**
 * 通过用户名获取用户信息
 * @param {string} username // 用户名
 * @returns {Promise<*>}
 */
async function getUserByName (username) {
  return await UserModel.findOne({'username': username});
}

exports.createUser = async (ctx, next) => {
  const params = ctx.request.body;

   const user = await getUserByName (params.username);

  if (user) {
    ctx.body = {
      code: -4700,
      message: '该用户名已经被占用'
    };
    return;
  }
  await UserModel.create({
    username: params.username,
    password: params.password,
    email: params.email
  });
  ctx.body = {
    code: 0,
    message: '注册成功'
  };
};
