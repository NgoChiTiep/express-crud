const UserModel = require('../models/user_model')

exports.register = function (req, res) {
    console.log(`req.body: ${JSON.stringify(req.body)}`)
    UserModel.findOne({email: req.body.email}, (err, user) => {
        if(user == null){ //Kiểm tra xem email đã được sử dụng chưa
            const userModel  = new UserModel(req.body) 
            userModel.save().then((result)=>{
                console.log(`logEmail ${result}`)
                res.json({status: "Success", code: 200, user: result})
            })
            .catch(err=>{
                console.log(`errrrr: ${err}`)
                return res.json({err})
            })
        }else{
            console.log(`emailInvalid: ${err}`)
            res.json({err: 'Email has been used'})
        }
    })
}

//DEV






exports.updateInfo = function (req, res) {
    console.log(`req.body: ${JSON.stringify(req.body)}`)
    UserModel.findOne({email: req.body.email}, (err, user) => {
        if(user == null){ //Kiểm tra xem email đã được sử dụng chưa
            const userModel  = new UserModel(req.body) 
            userModel.save().then((result)=>{
                console.log(`logEmail ${result}`)
                res.json({status: "Success", code: 200, user: result})
            })
            .catch(err=>{
                console.log(`errrrr: ${err}`)
                return res.json({err})
            })
        }else{
            console.log(`emailInvalid: ${err}`)
            res.json({err: 'Email has been used'})
        }
    })
}