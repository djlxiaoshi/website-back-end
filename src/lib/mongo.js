/**
 * @Author JohnLi
 * @Date 2018/1/14 13:41
 */
const MongoClient = require('mongodb');
const dbConfig = require('../config');
const DB_PATH = `${dbConfig.DBHost}:${dbConfig.DBPort}/${dbConfig.DBName}`;

let _connection;

const connect = () => {
  return MongoClient.connect(DB_PATH);
};

const connection = () => {
  if (!_connection) {
    _connection = connect();
  }
  
  return _connection;
};

exports.connection =  connection;
