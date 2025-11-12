
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    unit: String,
    img: String,
    category: String,
    description: String, 
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;