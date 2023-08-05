const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const database = 'e-comm';

// to get the data from mongo data base
const client = new MongoClient(url);

async function getData() {
 let result = await client.connect();
 let db = result.db(database);
 let collection = db.collection('products');
 const response = await collection.find({}).toArray();
 console.log('data retrieved--', response);
}


getData();