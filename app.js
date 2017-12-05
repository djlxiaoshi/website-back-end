/**
 * @Author johnli
 * @Date 2017/12/5 11:51
 */
const Koa = require('koa');
const app = new Koa();
// Connection URL
const url = 'mongodb://localhost:27017/website';

const MongoClient = require('mongodb').MongoClient
app.use(async ctx => {
    ctx.body = 'Hello World 4';



});

async function insertTest(db) {
    const result = await db.collection('users').insertOne({name: 'djl', age: 4400});
    
    console.log('result---result', result);
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('error!', err);
        return;
    }
   insertTest(db);
});



app.listen(3000);