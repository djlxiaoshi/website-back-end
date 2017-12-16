/**
 * @Author johnli
 * @Date 2017/12/5 11:51
 */
const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();

const userRoute = require('./router/user.route');
// const articleRoute = require('./router/article.route');
const staticPath = './static'


app.use(static(
  path.join( __dirname, staticPath)
));

// 路由
app.use(userRoute);
// app.use(articleRoute);

app.listen(3000);