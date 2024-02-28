const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-Product', (req, res, next) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="title">
    <button type ="submit">send</button></form>`);
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send("<h1>hello expressJS</h1>");
})

app.listen(3000); 