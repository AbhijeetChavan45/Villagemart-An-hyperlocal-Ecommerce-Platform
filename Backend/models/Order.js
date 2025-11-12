const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    orderItems: [{ name: String, quantity: Number, price: Number }],
    shippingAddress: { fullName: String, address: String, pincode: String, phone: String },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;