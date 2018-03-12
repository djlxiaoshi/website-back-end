/**
 * @Author johnli
 * @Date 2017/12/5 11:51
 */
const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const cors = require('koa2-cors');
const session = require('koa-session');

const CONFIG = {
  key: 'user', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};


const app = new Koa();

app.keys = ['ssss'];
app.use(session(CONFIG, app));

const routes = require('./router/index.route');

const staticPath = './static';

// 跨域
app.use(cors({
  origin: 'http://website.djl.com:3001',
  allowMethods: ['GET', 'POST', 'DELETE', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(static(
  path.join( __dirname, staticPath)
));

// 路由
app.use(routes);


app.listen(3000);