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




app.listen(5000);