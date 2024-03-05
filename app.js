const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const path = require('path');
const productsController = require('./controllers/products');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/contact', contactRoutes);
app.use(shopRoutes);

app.use(productsController.pageNotFound);

app.listen(80);

