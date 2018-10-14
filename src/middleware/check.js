// 检测用户是否登录

module.exports = {
  checkLogin (ctx, next) {
    if (!ctx.session.user) {
      return ctx.body = {
        code: -3700,
        message: '用户未登录'
      }
    }
    next();
  },

  checkNotLogin (req, res, next) {
    if (req.session.user) {
      return ctx.body = {
        code: -3701,
        message: '用户已登录'
      };
    }
    next();
  }
};