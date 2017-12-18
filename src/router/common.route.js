/**
 * @Author JohnLi
 * @Date 2017/12/18 20:55
 */

const Router = require('koa-router');
const router = new Router();

const crossOrigin = (ctx, next) => {
  ctx.response.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
  });
  
  if (ctx.request.method == 'OPTIONS') {
    res.send(200); // 让options请求快速返回
  }
  else {
    next();
  }
};

router.use(crossOrigin);