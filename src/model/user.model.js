/**
 * @Author JohnLi
 * @Date 2018/1/17 20:53
 */
const getCollection = require('../lib/mongo').connection;

async function getUserCollection(collection) {
  const db = await getCollection();
  if (db) {
    console.log('数据库连接成功');
    return db.collection(collection);
  } else {
    console.log('数据库连接失败', db);
  }
}

async function getUserByName(username) {
  const users = await getUserCollection('users');
  return users.findOne({username: username});
}



module.exports = {
  getUserByName: getUserByName
};
