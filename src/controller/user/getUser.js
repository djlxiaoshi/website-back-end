const UserModel = require('../../model/userModel');

/**
 * 通过用户名获取用户信息
 * @param {string} username // 用户名
 * @returns {Promise<*>}
 */
async function getUserByName (username) {
  return await UserModel.find({'username': username});
}

exports.getUser = async (ctx, next) => {
  const params = ctx.query;
  const data = await getUserByName(params.username);
  ctx.body = data;
};
