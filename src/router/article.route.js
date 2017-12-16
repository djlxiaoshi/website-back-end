const Router = require('koa-router');
const router = new Router({
  prefix: '/article'
});

const article = (ctx, next) => {
  console.log('article route');
};

router.get('/', article);

const routes = router.routes();
module.exports = routes;
