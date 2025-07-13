const jwt=require('jsonwebtoken');

const Auth=(req,res,next)=>{
   
    const token=req.cookies.accessToken;

    if(!token){
        console.log("cookies:", req.cookies); 
        return res.status(401).json({ message: 'No token found. Please log in jffffffffff.' });
      }
    try {
        const decoded=jwt.verify(token,process.env.JWT_ACCESS_TOKEN);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token!' });
    }    
}

module.exports=Auth;