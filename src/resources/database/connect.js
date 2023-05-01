var express = require('express');
var app = express();
// var mysql = require('mysql');
var mysql = require('mysql2');
// const connect = require('../Router/usersRoute');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "noood"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected ok!!!")
  });
  
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "CREATE TABLE customers2 (name VARCHAR(255), address VARCHAR(255))";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });});

module.exports = con;
// node src/resources/database/connect.js