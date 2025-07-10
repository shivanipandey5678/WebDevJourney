const blockList=require('../blockList.js');
const jwt=require('jsonwebtoken');
const User = require('../models/user.models');
const auth=async(req,res,next)=>{
    try {
        console.log('1')
        const token=req.headers?.authorization?.split(' ')[1];
        console.log('2')
        
        if(!token){
            return res.status(401).json({message:"token is missing!!"})
        }
        console.log('3')
        if(blockList.has(token)){
            return res.status(401).json({message:"please login again!!"})
        }
        console.log('4')
        const decoded= jwt.verify(token,process.env.accessTokenKey);
        console.log('5')
        if(!decoded){
            return res.status(401).json({message:"something went wrong!!"})
        }
        console.log('6')
        req.user=decoded;
        console.log('7')
        next()
    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports=auth;