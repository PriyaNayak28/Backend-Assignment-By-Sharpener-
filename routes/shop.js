const path = require('path');
const express = require('express');
const routes = express.Router();
const rootDir = require('../utils/path')

routes.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = routes;