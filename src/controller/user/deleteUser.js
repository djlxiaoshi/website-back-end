
module.exports = function (router) {

  // 获取用户信息
  router.delete('/user', (ctx, next) => {
    ctx.body = '删除用户';
  });
};
