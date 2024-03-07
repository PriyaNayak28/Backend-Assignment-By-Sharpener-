const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }

        // Check if fileContent is not empty
        if (fileContent.length === 0) {
            return cb([]);
        }

        try {
            const products = JSON.parse(fileContent);
            cb(products);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            cb([]);
        }
    });
};


module.exports = class Product {

    constructor(title) {
        this.title = title;
    }
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    };
    static fetchAll(cb) {
        getProductsFromFile(cb);
    };

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        })
    };
};

