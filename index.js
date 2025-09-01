const express=require('express')
const path=require('path')
const app=express()
app.use(express.urlencoded({extended:false}))
const user=require('./routes/user')
const student=require('./routes/student')
const PORT=3000
const connect=require('./connection')
const makeAdmin=require('./makeAdmin')
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(express.static('public'));
app.use(user)
app.use(student)
connect()

makeAdmin()
app.listen(PORT,err=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("server is connected......"+PORT);
        
    }
})