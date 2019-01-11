const collectionController = require('../controller/collection/index');

module.exports = function (router) {

  // 发现接口
  router.get('/explore', async (ctx, next) => {

    ctx.body = {
      code: -1000,
      message: '用户未登录',
      data: {}
    };
  });

};
