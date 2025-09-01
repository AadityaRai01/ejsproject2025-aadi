const Student=require('../models/Students')
const cloudinary=require('cloudinary').v2


async function addStudent(req,res){
    try {
        // console.log(req.body);
        // console.log(req.file);
        let result
        if(req.file){
            cloudinary.config({
                cloud_name:"dcz19fsby",
                api_key:633177386723297,
                api_secret:'_99u5JEDBnmedYoUVEpn-rpI9B0'
            })
            result=await cloudinary.uploader.upload(req.file.path)
            
        }
        let student=new Student(req.body)
        if (req.file) {
            student.studentImage=result.secure_url
        }
        await student.save()
        // console.log("database updated.......");
        let students=await Student.find({})
        res.render('studentlist',{
            students:students
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
async function adminHome(req,res){
    try {
        let students=await Student.find({})
        //  console.log(students);
        res.render('welcomeadmin',{
            students:students
        })
    } catch (error) {
        console.log(error);
        
    }
}
async function showListStudent(req,res){
    try {
         let students=await Student.find({})
        //  console.log(students);
        res.render('listStudent',{
            students:students
        })
    } catch (error) {
      console.log(error);
        
    }
}
async function deleteStudent(req,res){
    try {
        let studentId=req.params._id
        // console.log(studentId);
        if(studentId){
            await Student.deleteOne({_id:studentId})
            let students=await Student.find({})
            res.render('welcomeadmin',{
            students:students
        })
        }
    } catch (error) {
        console.log(error);
        
    }
}
async function openEditPage(req,res){
    try {
        let studentId=req.params._id
        let student=await Student.findOne({_id:studentId})
        if(student){
            res.render('updateStudent',{
                student:student
            })
        }
        else{
            res.render('/')
        }

    } catch (error) {
        console.log(error);
        
    }
}
async function editStudent(req,res) {
    try {
        const studentId=req.params._id
        // console.log(studentId+"studentId");
        let student=await Student.findOne({ _id:studentId })
        if(student){
            // console.log(req.body)
            student.rollNo=req.body.rollNo
            student.studentName=req.body.studentName
            student.fatherName=req.body.fatherName
            student.course=req.body.course
            student.branch=req.body.branch
            student.yearOfAdmission=req.body.yearOfAdmission
            await student.save()
            let students=await Student.find({})
            res.render('welcomeadmin',{
                students:students
            })
        }else{
            res.end("Student not found....")
        }
    } catch (error) {
        
    }
}
module.exports={
    addStudent,
    adminHome,
    showListStudent,
    deleteStudent,
    openEditPage,
    editStudent,

}