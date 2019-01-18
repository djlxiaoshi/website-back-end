const UserModel = require('../../model/userModel');

/**
 * 通过用户名获取用户信息
 * @param {string} username // 用户名
 * @returns {Promise<*>}
 */

exports.getUserByName =  async function (username) {
  return await UserModel.findOne({'username': username});
};


