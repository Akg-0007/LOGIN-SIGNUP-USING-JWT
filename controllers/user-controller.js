import user1 from '../Schema/user-schema.js'
import jwt1 from 'jsonwebtoken'
const jwt=jwt1
 const secret = 'your-secret-key'; 


const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    secret,
    { expiresIn: '7h' } 
  );
  return token;
};


export const adduser=async (request,response)=>{

    
    // const user=request.body;
    // const newUser= user1(user);

    // try {
    //    await newUser.save();
    //    response.status(201).json(newUser);
       
    // }
    const {name,email,password}=request.body;
    try{
      const ex=await user1.findOne({email:email});
      if(ex){return response.status(400).json({message:"user aleready exists"})}
      const result=await user1.create({email:email,password:password,name:name})
      const token = generateToken(result);
    //   response.send(token);
       // generate JWT token for the newly created user
    response.status(201).json({ user: result, token: token });
    }
     catch (error) {
        response.status(409).json({message: error.message});
    }
}

export const logusers=async(req,res)=>{
    const {email,password}=req.body;
   
    try {
        const user=await user1.findOne({email:email});
    
        if(user){
            if(password===user.password)
            {
             const token = generateToken(user); // generate JWT token for the logged in user
             
             res.status(200).json({ user: user, token: token });
            }
            else { res.status(401).json({ message: "password did not match" }); }
         }
        else {
        res.status(404).json({ message: "User not found" });} 
} 
catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const getusers=async(req,res)=>{
    try {
        const users =await user1.find({});
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}