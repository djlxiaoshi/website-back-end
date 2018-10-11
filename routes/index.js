// todo 登录校验

const Router = require('koa-router');
const router = new Router();

const userRouter = require('./users/index');

userRouter(router);

module.exports = router;

