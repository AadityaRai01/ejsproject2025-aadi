const User=require('./models/User')
const bcrypt=require('bcrypt')
async function makeAdmin(){
    try {
        let user=await User.findOne({email:'aaditya@gmail.com'})
        if(user){
            console.log('user updated....');
            
        }else{
        let user = new User
        user.firstName='aaditya'
        user.lastName='rai'
        user.email="aaditya@gmail.com"
        let encryptedPassword=bcrypt.hashSync("aaditya@12",10)
        user.password=encryptedPassword
        user.userType="Admin"
        await user.save()
        console.log('user saved successfully......');
        }        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=makeAdmin