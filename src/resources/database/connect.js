var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
// var mysql = require('mysql');
var mysql = require('mysql2');
const { connect } = require('../Router/usersRoute');

var con = mysql.createConnection({
    host: "",
    user: "root",
    password: "123456789",
    // database: "your_database"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
  });
  

  
  module.exports = connect
// node src/resources/database/connect.js