const collectionController = require('../controller/collection/index');

module.exports = function (router) {

  // 获取所有收藏
  router.get('/collection', collectionController.getAllCollections);

 // 删除指定id的collection
  router.delete('/collection/:id', collectionController.deleteCollection);
};
