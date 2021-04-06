require("dotenv").config();
const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const db = mongoose.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Closing...");
  });

  db.end();
});
