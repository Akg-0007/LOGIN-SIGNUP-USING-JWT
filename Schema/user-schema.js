import mongoose from "mongoose";
const userSchema= mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
})
const puser=mongoose.model('user1',userSchema);
export default puser;