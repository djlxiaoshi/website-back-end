/**
 * @Author JohnLi
 * @Date 2018/1/17 20:53
 */
const getCollection = require('../lib/mongo');

async function getUserByName(username) {
  return await getCollection().collection('users').findOne({username: username});
}

module.exports = {
  getUserByName: getUserByName
};
