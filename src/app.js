const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const session = require('koa-session'); // session 管理
const config = require('./config/config'); // 加载配置文件
const router = require('./routes/index'); // 加载路由
require('./model/index'); // 连接数据库

app.keys = ['djlxsdjlxs'];

// 解析post数据
app.use(koaBody());

// or if you prefer all default config, just use => app.use(session(app));
app.use(session(config.session, app));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, function () {
  console.log('服务器启动成功!');
});