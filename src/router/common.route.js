/**
 * @Author JohnLi
 * @Date 2017/12/18 20:55
 */

const Router = require('koa-router');
const router = new Router();

const crossOrigin = async (ctx, next) => {
  console.log('来了', ctx);
  ctx.response.set({
    'Access-Control-Allow-Origin': 'http://websit.djl.com:3700',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
  });
  
  if (ctx.request.method == 'OPTIONS') {
    res.send(202); // 让options请求快速返回
  }
  else {
    next();
  }
};

const login =  async (ctx, next) => {
  ctx.response.body = {
    error_code: -300,
    message: '服务器异常',
    data: []
  };
};

router.all('/user/login', crossOrigin);

const routes = router.routes();
module.exports = routes;
