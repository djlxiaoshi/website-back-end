// todo 登录校验

const Router = require('koa-router');
const config = require('../config/config');
const userRouter = require('./user');
const collectionRouter = require('./collection');
const exploreRouter = require('./explore');
const tagsRouter = require('./tags');

const router = new Router();

// 处理cors跨域
router.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set('Access-Control-Allow-Origin', config.allowOrigin);
  ctx.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  ctx.set('Access-Control-Allow-Credentials', true);
  await next()
});

// 处理预请求
router.options('*', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  ctx.set('Access-Control-Allow-Origin', config.allowOrigin);
  ctx.status = 204;
  await next();
});

// 用户相关路由
userRouter(router);
collectionRouter(router);
exploreRouter(router);
tagsRouter(router);

module.exports = router;

