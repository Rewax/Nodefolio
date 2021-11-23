const mysql2 = require("mysql2");
require("dotenv").config();
const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect();
const sqlquery =
  "create table users (username varchar(255), password varchar(255))";
connection.query(sqlquery, (error, result) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("tablecreated");
});
module.exports = connection;

