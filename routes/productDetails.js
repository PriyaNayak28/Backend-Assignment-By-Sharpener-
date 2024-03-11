const express = require('express');
const routes = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const productDetailsController = require('../controllers/products');

routes.use(express.urlencoded({ extended: false }));

routes.get('/add-to-cart', productDetailsController.getCart);

routes.post('/add-to-cart', productDetailsController.postCart);

module.exports = routes;
