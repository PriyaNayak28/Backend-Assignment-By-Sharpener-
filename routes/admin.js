const express = require('express');
const routes = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const productsController = require('../controllers/products');

routes.get('/add-product', productsController.getAddProduct);

routes.post('/add-product', productsController.postAddProduct);

module.exports = routes;

