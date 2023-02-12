const express = require('express');
const router = express.Router();
const {connection} = require('../db_config_mysql');

connection.connect();
connection.query('SELECT * FROM ps_member WHERE user_id = ? AND user_pw = ?', [userId, userPw], (error, rows, fields) => {
    
    if (error) throw error;
    if(rows != null) {
        console.log('User info is: ', rows);
    } else {
    }
});

connection.end();

module.exports = router;