const mongoose=require('mongoose')
const Schema=mongoose.Schema
const timestamps=require('mongoose-timestamps')

const studentSchema=new Schema({
    rollNo:{ type:Number,required:true,unique:true},
    studentName:{ type:String,required:true},
    motherName:{type:String,required:true},
    fatherName:{ type:String,required:true},
    email:{type:String,required:true,unique:true},
    course:{ type:String,required:true},
    branch:{ type:String},
    yearOfAdmission:{ type:String},
    studentImage:{type:String},
    createdAt:Date,
    updatedAt:Date
    
})

studentSchema.plugin(timestamps,{index:true})
module.exports=mongoose.model('Student',studentSchema)

