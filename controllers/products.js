const path = require('path');
const rootDir = require('../utils/path');
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'edit-product.html'));
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
        res.sendFile(path.join(rootDir, 'views', 'product-details.html'));
    });
};


exports.getCart = (req, res, next) => {
    const proID = req.query.productID; // Use req.query for GET requests
    console.log(proID);
    res.sendFile(path.join(rootDir, 'views', 'productDetails.html'));
};

exports.postCart = (req, res, next) => {
    Product.findById(proID, (product) => {
        if (product) {
            Cart.addProduct(proID, product.price);
            res.redirect('/add-to-cart');
        } else {
            // Handle the case where the product is not found
            res.status(404).send('Product not found');
        }
    });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const proID = req.body.productID;
    Product.findById(proID, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.sendFile(path.join(rootDir, 'views', 'edit-product.html'),
            'editing : editMode',
            'product:product');
    });
}
