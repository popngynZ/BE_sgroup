// const connect = require('./database/connect')

// connect.query(`create table Users(id INT AUTO_INCREMENT, fullname NVARCHAR(244) NOT NULL, age INT, CHECK (age > 0), gender BOOLEAN default true, PRIMARY KEY(id))`, (err, result) => {
//     console.log(err);
//     console.log(result);
// })


// connect.query(`insert into Users(fullname, age, gender) values ('Nguyen Huy Tuong', 69, true), ('Nguyen Thi Tuong', 21, false)`, (err, result) => {
//     console.log("insert done !");
//     console.log(err);
//     console.log(result);
// })
const connection = require('./connect')


//cho lần chạy 2
// connection.query(`drop table Student`)
connection.query(`CREATE TABLE Student (
  id int NOT NULL AUTO_INCREMENT,
  fullName varchar(255) NOT NULL,
  gender boolean,
  age int,
  PRIMARY KEY (id)
)`)

//create some student in table Student;
connection.query(`insert into Student(fullName, gender, age) values(?,?,?)`, ['dao code', false, 20])
connection.query(`insert into Student(fullName, gender, age) values(?,?,?)`, ['dao code 1', false, 30])
connection.query(`insert into Student(fullName, gender, age) values(?,?,?)`, ['dao code 2', false, 25])
connection.query(`insert into Student(fullName, gender, age) values(?,?,?)`, ['lol', false, 21])


console.log('done')
// node src/resources/database/init.js