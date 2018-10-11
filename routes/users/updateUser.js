
module.exports = function (router) {

  // 获取用户信息
  router.put('/user', (ctx, next) => {
    ctx.body = '修改用户';
  });
};
