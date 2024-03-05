const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/contact', contactRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'views', '404.html'));
});

app.listen(80);

