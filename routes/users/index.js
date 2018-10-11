const getUser = require('./getUser');
const updateUser = require('./updateUser');
const addUser = require('./addUser');
const deleteUser = require('./deleteUser');

module.exports = function (router) {
  getUser(router);
  addUser(router);
  updateUser(router);
  deleteUser(router);
};
