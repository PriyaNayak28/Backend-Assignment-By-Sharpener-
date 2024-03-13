const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const productDetailsController = require('./routes/productDetails');
const path = require('path');
const productsController = require('./controllers/products');
const db = require('./utils/database');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


db.execute('SELECT * FROM products');
app.use('/admin', adminRoutes);
app.use('/contact', contactRoutes);
app.use(productDetailsController);
app.use(shopRoutes);



app.use(productsController.pageNotFound);

app.listen(5500);

