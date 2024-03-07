const path = require('path');
const express = require('express');
const routes = express.Router();
const rootDir = require('../utils/path')
const productsController = require('../controllers/products');

routes.get('/', productsController.getProducts);

routes.get('/products/:productID', productsController.getProductsID);



module.exports = routes;