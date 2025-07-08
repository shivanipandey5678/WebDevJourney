const jwt = require('jsonwebtoken');
const blockList=require('../utils/tokenBlocklist.js')
const auth=async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startWith('Bearer')){
        return res.status(401).json({message:'token is missing'})
    }
    const token=authHeader.split(' ')[1];
    if(blockList.includes(token)){
        return res.status(403).json({ message: "Token has been logged out"});
    }

    try {
       const decoded= jwt.verify(token,process.env.JWT_SECREAT_TOKEN);
       req.auth=(decoded)
       next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }

}