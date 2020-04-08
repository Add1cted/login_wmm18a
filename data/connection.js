const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'blee',
  password: 'Blee',
  database: 'login_wmm18a',
});

connection.connect(err => {
  if (!err) {
    console.log('MySQL Connected');
  } else {
    console.log('MySQL Connection Failed.');
  }
});

module.exports = connection;
