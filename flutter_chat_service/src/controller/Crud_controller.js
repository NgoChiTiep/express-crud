const UserModel = require('../models/user_model')

exports.register = function (req, res) {
    console.log(`req.body: ${req.body.email}`)
    UserModel.findOne({email: req.body.email}, (err, user) => {
        if(user == null){ //Kiểm tra xem email đã được sử dụng chưa
            var userModel  = new UserModel(res.body) 
            userModel.save((err, result)=>{
                if(err) {return res.json({err})}
                console.log(`result ${result}`)
                res.json({status: "Success", code: 200, user: req.body})
            })
        }else{
            res.json({err: 'Email has been used'})
        }
    })

}

