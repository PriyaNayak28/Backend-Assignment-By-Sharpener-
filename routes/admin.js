const express = require('express');
const routes = express.Router();
const path = require('path');
const rootDir = require('../utils/path')

routes.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

routes.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = routes;

