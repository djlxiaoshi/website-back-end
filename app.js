const Koa = require('koa');
const app = new Koa();

const router = require('./routes/index');
require('./model/index');

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);