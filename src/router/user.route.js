const koaBody = require('koa-body');
const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/users'
});

const checkLogin = require('../middlewares/check').checkLogin;
const checkNotLogin = require('../middlewares/check').checkNotLogin;

const userModel = require('../model/user.model');
const getDb = require('../lib/mongo').connection;

const login = async (ctx, next) => {
  console.log('session', ctx.session);
  const params = ctx.method === 'POST' ? ctx.request.body : ctx.request.query;
  //  拿到用户名与密码
  const username = params.username;
  const password = params.password;
  try{
    const user = await userModel.getUserByName(username);
    
    if (user) {
      if (user.password === password) {
        // 保存防护登录信息
        ctx.session.user = user;
        ctx.response.body = {
          error_code: 0,
          message: '登录成功',
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
    const user = await userModel.getUserByName(username);
    
    if (user) {
      ctx.response.body = {
        error_code: -898001,
        message: '用户已存在',
        data: []
      };
    } else {
      const db = await getDb();
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
      message: '服务器内部异常' + e,
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
    const user = await userModel.getUserByName(username);
    
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

const logOut = async(ctx, next) => {
  try{
    // 删除用户登录信息
    ctx.session.user = null;
    ctx.response.body = {
      error_code: 0,
      message: '登出成功',
      data: []
    };
  } catch(e) {
    console.log(e);
    ctx.response.body = {
      error_code: -898000,
      message: '服务器内部异常',
      data: []
    };
  }
};

// 登录
router.get('/', checkLogin, login);

router.post('/logout', koaBody(), logOut);
router.get('/logout', logOut);

router.post('/', koaBody(), register);
router.put('/', koaBody(), modify);

const routes = router.routes();
module.exports = routes;
