const mysql = require('mysql');
const connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'niceduri',
    database : 'project_soi'
});

module.exports = connection;
//mysql.createConnection(config[test])