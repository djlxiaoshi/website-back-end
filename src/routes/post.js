const userController = require('../controller/user/index');

module.exports = function (router) {
  // 获取用户信息
  router.get('/user', userController.getUser);
  // 创建用户
  router.post('/user', userController.createUser);
  // 更新用户信息
  router.put('/user', userController.updateUser);
};
