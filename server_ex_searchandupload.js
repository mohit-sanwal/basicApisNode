const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const multer = require('multer');
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
    resp.send(data);
})


app.get('/search/:key', async(req, resp) => {
    console.log('keyName--', req.params.key);
    let data = await Product.find({ 
        "$or" : [
            {"name":{$regex: req.params.key} },
            {"brand":{$regex: req.params.key} }
          ] 
       }
    )
    console.log('data--', data);
    resp.send(data)
})

/***
 * can we use post and Put method to create search api - yes, but recommended is get
 * delete method is only used for delete the records
 * 
 * 
 */


/***
 * 
 * File upload
 */

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uploads")
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file")


app.post('/upload', upload, (req, resp) => {

    resp.send('file uploaded');
})

/***
 * can we upload file without multer - yes
 */


app.listen(5000);

// for delete we should send the id into query params
// for update it's up to us where we want to send either body or query params

