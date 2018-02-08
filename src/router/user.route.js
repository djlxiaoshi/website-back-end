const koaBody = require('koa-body');
const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/users'
});

const userModel = require('../model/user.model');
const login = async (ctx, next) => {
  const params = ctx.request.query;
  //  拿到用户名与密码
  const username = params.username;
  const password = params.password;
  try{
    const user = await userModel.getUserByName({username: username});
  
    if (user) {
      if (user.password === password) {
        ctx.response.body = {
          error_code: 0,
          message: '用户已存在',
          data: []
        };
      } else {
        ctx.response.body = {
          error_code: -801004,
          message: '密码错误',
          data: []
        };
      }
    } else {
      ctx.response.body = {
        error_code: -898002,
        message: '用户不存在',
        data: []
      };
    }
  } catch(e) {
    console.log(e);
    ctx.response.body = {
      error_code: -898000,
      message: '服务器内部异常',
      data: []
    };
  }
};

const register = async(ctx, next) => {
  const params = ctx.request.body;
  //  拿到用户名与密码
  const username = params.username;
  const password = params.password;
  try{
    const db = await MongoClient.connect(DB_PATH);
    const user = await db.collection('users').findOne({username: username});
    
    if (user) {
      ctx.response.body = {
        error_code: -898001,
        message: '用户已存在',
        data: []
      };
    } else {
      const user = await db.collection('users').insertOne({username: username, password: password});
      ctx.response.body = {
        error_code: 0,
        message: '注册成功',
        data: user
      };
    }
  } catch(e) {
    ctx.response.body = {
      error_code: -898000,
      message: '服务器内部异常',
      data: []
    };
  }
};

const modify = async(ctx, next) => {
  const params = ctx.request.body;
  //  拿到用户名与密码
  const username = params.username;
  const password = params.password;
  try{
    const db = await MongoClient.connect(DB_PATH);
    const user = await db.collection('users').findOne({username: username});
    if (user) {
      await db.collection('users').updateOne(
        {_id: user['_id']},
        {$set: {username: username, password: password}}
      );
  
      ctx.response.body = {
        error_code: 0,
        message: '修改成功',
        data: []
      };
    } else {
      ctx.response.body = {
        error_code: -898002,
        message: '用户不存在',
        data: []
      };
    }
  } catch(e) {
    console.log(e);
    ctx.response.body = {
      error_code: -898000,
      message: '服务器内部异常',
      data: []
    };
  }
};

router.get('/', login);
router.post('/', koaBody(), register);
router.put('/', koaBody(), modify);

const routes = router.routes();
module.exports = routes;
