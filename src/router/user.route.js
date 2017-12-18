const queryString = require('querystring');
const koaBody = require('koa-body');


const Router = require('koa-router');
const router = new Router({
  prefix: '/user'
});
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config');
const DB_PATH = `${dbConfig.DBHost}:${dbConfig.DBPort}/${dbConfig.DBName}`;

const main = async (ctx, next) => {
  const body = ctx.request.body;
  //  拿到用户名与密码
  const username = body.username;
  const password = body.password;
  try{
    const db = await MongoClient.connect(DB_PATH);
    const user = await db.collection('user').findOne({name: username});
  
    if (user) {
      if (user.password === password) {
        console.log('用户存在');
        ctx.response.body = {
          error_code: 0,
          message: '用户存在',
          data: []
        };
      } else {
        console.log('用户名或者密码错误');
        ctx.response.body = {
          error_code: 0,
          message: '用户名或者密码错误',
          data: []
        };
      }
    } else {
      ctx.response.body = {
        error_code: -3700,
        message: '用户不存在',
        data: []
      };
      console.log('用户不存在');
    }
  } catch(e) {
    ctx.response.body = {
      error_code: -300,
      message: '服务器异常',
      data: []
    };
  }
};

router.post('/login', koaBody(), main);

const routes = router.routes();
module.exports = routes;
