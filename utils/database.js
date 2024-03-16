// const mysql = require('mysql2');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node',
//     password: '#@focus28'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', '#@focus28', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;