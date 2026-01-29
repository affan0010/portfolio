const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();  // <-- This reads the .env file

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.getConnection((err, connection) => {
    if(err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database!");
        connection.release();
    }
});

module.exports = db;
