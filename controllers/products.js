const path = require('path');
const rootDir = require('../utils/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
};

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};

exports.pageNotFound = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
};