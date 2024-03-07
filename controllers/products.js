const path = require('path');
const rootDir = require('../utils/path');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    });
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

exports.getProductsID = (req, res, next) => {
    const proID = req.params.productID;
    Product.findById(proID, product => {
        console.log(product);
    })
    console.log(proID);
    res.redirect('/');
}




