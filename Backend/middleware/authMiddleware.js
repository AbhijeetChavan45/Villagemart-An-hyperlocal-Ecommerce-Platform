const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            // Verify the token using our secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get the user from the database and attach it to the request
            req.user = await User.findById(decoded.user.id).select('-password');
            next(); 
        } catch (error) {
            res.status(401).json({ msg: 'Not authorized, token failed' });
        }
    }
    if (!token) {
        res.status(401).json({ msg: 'Not authorized, no token' });
    }
};

const isVendor = (req, res, next) => {
    if (req.user && req.user.role === 'vendor') {
        next();
    } else {
        res.status(401).json({ msg: 'Not authorized as a vendor' });
    }
};

module.exports = { protect, isVendor };