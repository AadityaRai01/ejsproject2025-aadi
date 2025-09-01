const express=require('express')
const multer=require('multer')
const studentController=require('../controllers/studentController')
const router =express.Router()
 
const upload=multer({
    storage:multer.diskStorage({}),
    limits:{fileSize: 10 * 1024 * 1024 }
})

router.post('/add/student',upload.single('studentImage'),(req,res)=>{
    studentController.addStudent(req,res)
})
router.get('/student/list/page',(req,res)=>{
    studentController.showListStudent(req,res)
    // res.render('listStudent')/
})
router.get('/home/admin/page',(req,res)=>{
    studentController.adminHome(req,res)
})
router.get('/delete/student/:_id',(req,res)=>{
    studentController.deleteStudent(req,res)
})
router.get('/edit/student/page/:_id',(req,res)=>{
    studentController.openEditPage(req,res)
})
 router.post('/edit/student/:_id',(req,res)=>{
    studentController.editStudent(req,res)
 })
module.exports=router