const tagsController = require('../controller/tag/index');
const  { checkLogin }  = require('../middleware/check');

module.exports = function (router) {

  // 获取用户标签列表
  router.get('/tags', checkLogin, tagsController.getTagsListByUserId);

  // 创建标签
  router.post('/tags', checkLogin, tagsController.createTag);

};
