const UserModel = require('../../model/userModel');

/**
 * 通过用户名获取用户信息
 * @param {string} username // 用户名
 * @returns {Promise<*>}
 */
async function getUserByName (username) {
  return await UserModel.findOne({'username': username});
}

// todo 寻找错误码相关的规范

exports.userLogin = async (ctx, next) => {
  const params = ctx.request.body;
  const result = await getUserByName(params.username);

  if (result) {
    if (result.password === params.password) {
      ctx.session.user = result;
      ctx.body = {
        code: 0,
        data: result,
        message: '登录成功'
      };
    } else {
      ctx.body = {
        code: -3700,
        message: '密码不正确'
      };
    }
  } else {
  //  todo 用户登录异常处理

    ctx.body = {
      code: -3701,
      message: '用户名不正确'
    };
  }
};
