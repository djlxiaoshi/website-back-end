/**
 * @Author JohnLi
 * @Date 2018/2/9 16:14
 */
module.exports = {
  checkLogin:  (ctx, next) =>  {
    if (!ctx.session.user) {
      return ctx.response.body = {
        error_code: -3737,
        message: '未登录',
        data: []
      };
    }
    
    next();
  },
  checkNotLogin: (ctx, next) => {
    if (ctx.session.user) {
      return res.redirect('back')// 返回之前的页面
    }
    next();
  }
};