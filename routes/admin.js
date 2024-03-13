const express = require('express');
const routes = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const productsController = require('../controllers/products');

routes.get('/edit-product', productsController.getAddProduct);

routes.post('/edit-product', productsController.postAddProduct);

routes.get('/edit-product/:productID', productsController.getEditProduct);


module.exports = routes;

