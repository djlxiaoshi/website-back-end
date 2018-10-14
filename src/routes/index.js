// todo 登录校验

const Router = require('koa-router');
const userRouter = require('./user');

const router = new Router();

// api cors
router.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Credentials', true);
  await next()
});

// 用户相关路由
userRouter(router);

module.exports = router;

