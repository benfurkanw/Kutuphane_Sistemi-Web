const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kutuphanedb',
    password: 'Fd15801233@',
})

module.exports = connection.promise()