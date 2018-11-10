const collectionController = require('../controller/collection/index');

module.exports = function (router) {

  // 获取所有收藏
  router.get('/collection', collectionController.getAllCollections);

  // 获取指定id收藏
  router.get('/collection/:id', collectionController.getCollectionById);

 // 删除指定id的collection
  router.delete('/collection/:id', collectionController.deleteCollection);

  // 添加收藏
  router.post('/collection', collectionController.createCollection);

  // 更新收藏
  router.put('/collection', collectionController.updateCollection);
};
