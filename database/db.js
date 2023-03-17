import mongoose from "mongoose"


const connection= async (username,password)=>{

   const url=`mongodb+srv://${username}:${password}@akg.xi8wxy1.mongodb.net/?retryWrites=true&w=majority`
    try {
  await  mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
  console.log("server1 is  connected")
 } catch (error) {
    console.log("error",error.message)
 }
}
export default connection;