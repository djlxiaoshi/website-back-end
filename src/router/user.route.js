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
  console.log('body', body);
  //  拿到用户名与密码
  const username = body.username;
  const password = body.password;

  const db = await MongoClient.connect(DB_PATH);
  const user = await db.collection('user').findOne({name: username});


  if (user.password === password) {
    console.log('用户存在');
  } else {
    console.log('用户不存在');
  }



};

router.post('/login', koaBody(), main);

const routes = router.routes();
module.exports = routes;
