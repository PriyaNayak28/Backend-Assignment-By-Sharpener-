const express = require('express');
const routes = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const contactController = require('../controllers/products');

routes.use(express.urlencoded({ extended: false }));

routes.get('/contactus', contactController.getContact);

routes.post('/contactus', contactController.postContact);

module.exports = routes;

