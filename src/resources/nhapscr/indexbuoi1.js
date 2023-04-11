
const express = require('express')
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
app.get('/link', (req, res) => {
    res.send(users)
})
// app.get('/link/:id', (req, res) => {
//     res.send(req.params.id)
// })
app.get('/link/:id', (req, res) => {

    const user = users.find(users => users.id === parseInt(req.params.id))
    if (!user) res.status(404).send('id ko tontai')
    res.send(user)
})



// app.post('/link/add', function (request, response) {
//     response.send(request.users);    // echo the result back
//     console.log(request.body);      // your JSON
// });
// app.post('/link/add', function(req, res) {
//     console.log(req.body);
//     // const user = {
//     //     id : users[users.length - 1].id + 1,
//     //     fullname : req.body.fullname,
//     //     gender : req.body.gender,
//     //     age : req.body.age
//     // }
//     // users.push(user);
//     res.status(201).json(users)
// })


//thằng này thiếu dấu / trước link nên đéo chạy đc
app.post('/link/add', (req, res) => {
    res.send(req.users);
    console.log(req.body)
    // res.redirect('')
    // res.json(users)
});

// app.post('/link/add', (req, res) => {
//     const user = req.body;
//     console.log(user); 
//     // Lưu thông tin user vào database kiểu thằng nào là tên minh đặt cái user là tổng nãy minh đặt á
//     res.status(201).send(users);
//   });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})