/**
 * @Author JohnLi
 * @Date 2018/1/14 13:41
 */
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config');
const DB_PATH = `${dbConfig.DBHost}:${dbConfig.DBPort}/${dbConfig.DBName}`;

exports.db  = await MongoClient.connect(DB_PATH);
