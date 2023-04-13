function checknameMiddleware(req, res, next) {
    // full ký tự tiếng việt
    const kytu = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    const user = req.body
    //hàm test kiểm tra fullname của user có khớp với biểu thức chính quy kytu hay không
    if(!kytu.test(user.fullname)){
        res.status(400).send('Invalid fullname')
    } 
    else {
        next()
    }
}

module.exports = checknameMiddleware