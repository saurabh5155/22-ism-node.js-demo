const { default: mongoose } = require("mongoose");
let UserModel = require("../model/userModel")

module.exports.addUsers = function (req,res){

    let user = new UserModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password,
        role:req.body.roleId
    })

    user.save(function(err,data){
        if(err){
            console.log("error in addUser()"+err);
            res.json({
                status:-1,
                msg : "User Are Not Added",
                data : req.body
            })
        }else{
            console.log("User Added Sussessfull"+data);
            res.json({
                status:200,
                msg : "User Are Added",
                data : data
            })
        }

    })
}


module.exports.getAllUsers = function(req,res){
    UserModel.find().populate("role").exec(function(err,data){
        if (err) {
            res.json({
                status: -1, msg: "SMW", data: err
            })
        } else {
            res.json({ status: 200, msg: "USER RET", data: data })
        }
    })
}