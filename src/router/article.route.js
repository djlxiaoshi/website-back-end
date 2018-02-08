const Router = require('koa-router');
const router = new Router({
  prefix: 'v1/articles'
});

const article = (ctx, next) => {
  console.log('article route');
};

router.get('/', article);

const routes = router.routes();
module.exports = routes;
