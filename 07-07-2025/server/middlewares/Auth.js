const jwt=require('jsonwebtoken');

const Auth=(req,res,next)=>{
    const token=req.cookies.accessToken;

    if(!token){
        return res.status(401).json({ message: 'No token found. Please log in.' });
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