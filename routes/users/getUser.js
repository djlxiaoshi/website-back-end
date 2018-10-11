
module.exports = function (router) {

  // 获取用户信息
  router.get('/user', (ctx, next) => {
    ctx.body = '获取用户';
  });
};
