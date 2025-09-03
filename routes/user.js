const express=require('express')
const router =express.Router()
const userController=require('../controllers/UserController')


router.get('/',(req,res)=>{
    res.render('landingPage')
})
router.get('/login',(req,res)=>{
    res.render('home')
})
router.get('/user/signup',(req,res)=>{
    res.render('signup')
})
router.post('/add/user',(req,res)=>{
    userController.addUser(req,res)
})
router.post('/login',(req,res)=>{
    userController.dologin(req,res)
})
router.get('/student/add/page',(req,res)=>{
    res.render('addStudent')
})



module.exports=router