const collectionController = require('../controller/collection/index');
const  { checkLogin }  = require('../middleware/check');
module.exports = function (router) {

  // 获取所有收藏
  router.get('/collection', checkLogin, collectionController.getAllCollections);

  // 获取指定id收藏
  router.get('/collection/:id', checkLogin, collectionController.getCollectionById);

 // 删除指定id的collection
  router.delete('/collection/:id', checkLogin, collectionController.deleteCollection);

  // 添加收藏
  router.post('/collection', checkLogin, collectionController.createCollection);

  // 更新收藏
  router.put('/collection', checkLogin, collectionController.updateCollection);
};
