const express = require('express');
const routes = express.Router();
const path = require('path');
const rootDir = require('../utils/path')

routes.use(express.urlencoded({ extended: false }));

routes.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
})

routes.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})

module.exports = routes;

