const Koa = require('koa');
const app = new Koa();

// 路由
const userRoute = require('./user.route');

app.use(userRoute);
