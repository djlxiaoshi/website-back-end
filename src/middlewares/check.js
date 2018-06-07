/**
 * @Author JohnLi
 * @Date 2018/2/9 16:14
 */
module.exports = {
  checkLogin: async (ctx, next) =>  {
    if (!ctx.session.user) {
      console.log('用户首次登录');
      ctx.response.body = {
        error_code: -3737, // 前端根据这个状态码来判断
        message: '未登录',
        data: []
      };
    } else {
      console.log('用户已登录');
    }
    await next();
  },
  checkNotLogin: (ctx, next) => {
    if (ctx.session.user) {
      return res.redirect('back')// 返回之前的页面
    }
    next();
  }
};