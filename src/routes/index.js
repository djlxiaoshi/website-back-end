// todo 登录校验

const Router = require('koa-router');
const userRouter = require('./user');
const config = require('../config/config');

const router = new Router();

// api cors
router.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set('Access-Control-Allow-Origin', config.allowOrigin);
  ctx.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  ctx.set('Access-Control-Allow-Credentials', true);
  await next()
});

// 处理预请求
// api options method
router.options('*', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set('Access-Control-Allow-Origin', config.allowOrigin);
  ctx.status = 204;
  await next();
});

// 用户相关路由
userRouter(router);

module.exports = router;

