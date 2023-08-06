const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
require('./configs');
const product = require('./product');
const app = express();

app.use(express.json());

app.post('/create', async (req, resp) => {
    const data = new product(req.body);
    const result = await data.save();
    resp.send(result);
})

app.listen(5000);