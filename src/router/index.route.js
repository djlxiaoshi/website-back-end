const Router = require('koa-router');
const router = new Router();

const userRouter = require('./user.route');

router.use(
  userRouter
);

module.exports =  router.routes();
