const connect = require('./database/connect')

connect.query(`create table Users(id INT AUTO_INCREMENT, fullname NVARCHAR(244) NOT NULL, age INT, CHECK (age > 0), gender BOOLEAN default true, PRIMARY KEY(id))`, (err, result) => {
    console.log(err);
    console.log(result);
})


connect.query(`insert into Users(fullname, age, gender) values ('Nguyen Huy Tuong', 69, true), ('Nguyen Thi Tuong', 21, false)`, (err, result) => {
    console.log("insert done !");
    console.log(err);
    console.log(result);
})