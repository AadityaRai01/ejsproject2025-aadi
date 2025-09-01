const mongoose=require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/ejsStudentProject')
        console.log("db is connected");
        
        
    } catch (error) {
        console.log(err);
        
    }
}
module.exports=connect