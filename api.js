const express = require('express');
const dbConnect = require('./mongodb');
const ObjectId = require('mongodb').ObjectID;

const app = express();

// to use get the request or postman data available in req
app.use(express.json());


// get api

app.get('/', async(req, resp) => {
    let data = await dbConnect();
    let resData = await data.find().toArray();
    console.log('resData', resData)
    resp.send(resData);
})

app.post('/', async(req, resp) => {
    // console.log('request body', req.body);
    let db = await dbConnect();
    let resData = await db.insertMany([req.body])
    // console.log('response data', resData)
    resp.send(resData);
})


app.put('/:name', async(req, resp) => {
    console.log('request body',req.body, req.params.id);
    let db = await dbConnect();
    let resData = await db.updateOne({ name: req.params.name}, {$set: req.body})
    // console.log('response data', resData)
    if(resData.acknowledged) {
      resp.send(resData);
    }
})

app.listen(5000)







/*

can we pass body inside get method - no
can we pass query params inside get - yes

// post

can get and post api urls be same?- yes it can be same
they will not conflict as the method should be different


Q: before express 4.6 version we used body parsor to get the body
from request in latest version we can use express.json()


Q: can we update data via POST request - yes we can but the standard
recommended way is PUT

*/
