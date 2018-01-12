const Router = require('koa-router');
const router = new Router();

const userRouter = require('./user.route');
const commonRouter = require('./common.route');

router.use(
  // commonRouter,
  userRouter
);

module.exports =  router.routes();
