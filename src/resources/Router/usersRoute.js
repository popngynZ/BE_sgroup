const checknameMiddleware = require('../middleware/middleware')
const express = require('express')
const userRouter = express.Router();
//khai báo chưa có thăng userRouter cho thằng app
const app = express()
const port = 3000
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true }))

let users = [
    {
        "id": 1,
        "fullname": "Nguyen Huy Tuong",
        "gender": true,
        "age": 18
    },
    {
        "id": 2,
        "fullname": "Nguyen Thi Tuong",
        "gender": false,
        "age": 15
    }
]
userRouter.get('/link', (req, res) => {
    res.send(users)
})
//lấy dữ liệu
userRouter.get('/link/:id', (req, res) => {
//parseIn trả về số nguyên
    const user = users.find(users => users.id === parseInt(req.params.id))
    if (!user) res.status(404).send('ID Khong ton tai')
    res.send(user)
})
//thêm dữu liệu
userRouter.post('/link/add', function(req, res) {
    // console.log(req.body);
    const user = {
        id : users[users.length - 1].id + 1,
        fullname : req.body.fullname,
        gender : req.body.gender,
        age : req.body.age
    }
    // thêm phần tử ở cuối mảng
    users.push(user);
    //users nó lưu vào đây nhớ đổi bên post man thành json luôn
    res.status(201).json(users);
    // res.send(users)
})


// sửa dữ liệu
userRouter.put('/:id', function(req, res) {
    const user = users.find(user => 
        user.id === parseInt(req.params.id)
    )
    if(!user) {
        res.status(404).json('ID không tồn tại')
    }
    if(Object.keys(req.body).length !== 0) {
        user.fullname = req.body.fullname
        user.gender = req.body.gender
        user.age = req.body.age
        res.status(200).json(user)
    }
    else {
        res.status(204).json()
    }
})

// xóa dữ liệu
userRouter.delete('/:id', function(req, res) {
    const user = users.find(user => 
        user.id === parseInt(req.params.id)
    )
    if(!user) {
        res.status(404).json('ID không tồn tại')
    }
        users.splice(users.indexOf(user), 1)
        res.status(204).json()
})
//middleware


module.exports = userRouter
