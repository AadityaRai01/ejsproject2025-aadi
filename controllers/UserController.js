const User=require("../models/User")
const bcrypt=require('bcrypt')
const Student =require('../models/Students')
async function addUser(req,res){
    try {
        // console.log(req.body);
        let user= new User(req.body)
        let encryptedPassword=bcrypt.hashSync(req.body.password,10)
        // console.log(encryptedPassword);
        user.password=encryptedPassword
        await user.save()
        res.redirect('/')
        
    } catch (error) {
        console.log(error);
        
    }
}
async function dologin(req,res) {
    try {
        
        let user=await User.findOne({email:req.body.email})
        let userType=user.userType
        if(user){
            let validpassword= await  bcrypt.compare(req.body.password, user.password)
            if (validpassword) {
                if(userType ==='Admin'){
                let students=await Student.find({})
                res.render('welcomeadmin',{
                    students:students,
                    userType:userType
                }
                )}
                else{
                    let student=await Student.findOne({email:req.body.email})
                    res.render('welcomeStudent',{
                        student:student
                    })
                }
            } else {
                res.end("<h1>invalid email/password.....")
            }

        }else{
            res.end("<h1>user doesn't exsists.....")
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={
    addUser,
    dologin
}