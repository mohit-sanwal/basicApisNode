const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
require('./configs');
const Product = require('./product');
const app = express();

app.use(express.json());

app.post('/create', async (req, resp) => {
    const data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
})


app.get('/getProducts', async (_, resp) => {
    const data = await Product.find();
    resp.send(data);
})

app.delete('/deleteProduct/:_id', async (req, resp) => {
    const id = (req.params._id).trim();
    console.log('req.params', req.params) // {_id: '34593252303nf893rw'}
    // const data = await Product.deleteOne({_id: new mongodb.ObjectId(id)}); // when id with ObjectId('y8343y3249')
    const data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.put('/updateProduct/:_id', async (req, resp) => {
    const id = (req.params._id).trim();
    // const data = await Product.updateOne({_id: new mongodb.ObjectId(id)}, {$set: req.body});
    const data = await Product.updateOne(req.params, {$set: req.body});
    console.log('data===', data);
    resp.send(data);
})




app.listen(5000);