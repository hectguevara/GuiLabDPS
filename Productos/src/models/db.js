const mysql = require('mysql2');
const dbconfig = require('../config/db.config');

//Crear la conexion a la base de datos
const connection = mysql.createConnection({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB,
  port: dbconfig.PORT
});

module.exports = connection;