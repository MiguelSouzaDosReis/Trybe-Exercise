const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: 'localhost',
  user: 'miguel',
  password: '5wA%uxy%',
  database: 'model_example',
});

module.exports = connection;