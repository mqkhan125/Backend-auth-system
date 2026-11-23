const mysql = require('mysql2')
require("dotnev").confiq()

const pool = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.BD_USER,
    password : process.env.BD_PASSWORD,
    name : process.env.DB_NAME,
})

module.exports = pool.promise();