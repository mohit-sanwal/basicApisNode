
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
    name:String,
    price: Number,
    brand: String,
    category: String
})

const saveInDb = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({
        name: 'm8', 
        price: 123,
        brand: 'oneplus',
        category: 'mobile'
    });
    let result = await data.save();
    console.log(result);
}


const readFromDb = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.find();
    console.log(data);
}


const updateInDb = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.updateOne({name: 'm8'}, {$set: {name: 'M8onepluspro'}});
    console.log('data..', data)
}

const deleteFromDb = async () => {
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.deleteMany({name: 'M8onepluspro'})
    console.log(data);
}

// saveData();
// readFromDb();
//updateInDb();
deleteFromDb();





















/**
 * 
 * differce between mongo and mongoose, mongoose help us to prevent entering extra field
 * 
 * difference between schema and model
 * schema - number of fields defined in database 
 * model - it uses the schema to connect mongodb and node
 * 
 */