const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');

//  CREATE a new order
router.post('/', protect, async (req, res) => {
    const { orderItems, shippingAddress, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        return res.status(400).json({ msg: 'No order items' });
    }

    try {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            totalPrice,
        });

        const createdOrder = await order.save();

        // ---  TO SAVE ADDRESS ---
        const user = req.user;
        const addressExists = user.addresses.find(
            (a) => a.address === shippingAddress.address && a.pincode === shippingAddress.pincode
        );
        if (!addressExists) {
            user.addresses.push(shippingAddress);
            await user.save();
        }
      

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error while creating order' });
    }
});


//  to GET a logged-in user's orders
router.get('/myorders', protect, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;