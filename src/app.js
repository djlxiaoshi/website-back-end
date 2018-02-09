/**
 * @Author johnli
 * @Date 2017/12/5 11:51
 */
const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const cors = require('koa2-cors');

const app = new Koa();

const routes = require('./router/index.route');

const staticPath = './static';

// 跨域
app.use(cors({
  origin: 'http://websit.djl.com:3700',
  credentials: true
}));

app.use(static(
  path.join( __dirname, staticPath)
));

// 路由
app.use(routes);


app.listen(3000);