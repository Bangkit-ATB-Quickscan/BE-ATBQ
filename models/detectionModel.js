const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectTimeout: 10000
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to Google Cloud MySQL database');
});

exports.saveResult = (originalName, resultImage) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tb_detection_results (original_name, result_image) VALUES (?, ?)';
        connection.query(query, [originalName, resultImage], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results.insertId);
        });
    });
};

exports.getResults = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tb_detection_results';
        connection.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
