import jwt1 from 'jsonwebtoken'
const secret = 'your-secret-key'; 
const auth=(req,res,next)=>{
    try {
        let token=req.headers.authorization;
        if(token){
            token=token.split(" ")[1];
            let user = jwt1.verify(token,secret);
            req.userId=user._id
        }
        else{
            res.status(401).json({message:"unauthorized user"})
        }
        next();
    } catch (error) {
        console.log(error);
        response.status(401).json({message: error.message});

    }
}
export default auth;