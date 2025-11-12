const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, isVendor } = require('../middleware/authMiddleware');

// Vendor adds a new product
router.post('/products', protect, isVendor, async (req, res) => {
    try {
        const { name, price, unit, img, category, description } = req.body;
        const product = new Product({ name, price, unit, img, category, description, vendor: req.user._id });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
});

//Vendor gets their own products
router.get('/products', protect, isVendor, async (req, res) => {
    try {
        const products = await Product.find({ vendor: req.user._id });
        res.json(products);
    } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
});

// Vendor updates a product
router.put('/products/:id', protect, isVendor, async (req, res) => {
    try {
        const { name, price, unit, img, category, description } = req.body;
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });
        if (product.vendor.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
        product.name = name || product.name;
        product.price = price || product.price;
        product.unit = unit || product.unit;
        product.img = img || product.img;
        product.category = category || product.category;
        product.description = description || product.description;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) { res.status(500).json({ msg: 'Server Error' }); }
});

// Vendor deletes a product
router.delete('/products/:id', protect, isVendor, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        if (product.vendor.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }
        await Product.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Product removed' });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;