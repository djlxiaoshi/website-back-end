
module.exports = function (router) {

  // 获取用户信息
  router.post('/user', (ctx, next) => {
    ctx.body = '添加用户';
  });
};
