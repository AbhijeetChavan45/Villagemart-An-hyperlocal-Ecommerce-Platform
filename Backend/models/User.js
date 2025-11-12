const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    phone: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' },
    addresses: [addressSchema]
});

const User = mongoose.model('User', userSchema);
module.exports = User;