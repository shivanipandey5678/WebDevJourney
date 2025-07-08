const express=require('express');
const blockList=require('../blockList.js');
const jwt=require('jsonwebtoken');
const Auth=async(req,res,next)=>{
    
    try {
        const authHeader=req.headers.authorization;
        if(!authHeader){
            console.log("level1 ")
            return res.status(401).json({message:'token is missing!!'});
        }
        const token=authHeader.split(' ')[1];
        if(blockList.includes(token)){
            console.log("level2 ")
            return res.status(401).json({message:'token is blocklisted please login again!!'})
        }
        console.log("level3 ")
        const decoded= jwt.verify(token,process.env.screatKey);
        console.log("level3.5 ")
        console.log(decoded)
        if(decoded){
            console.log("level4 ")
            req.user=decoded;
            next();
        }else{
            console.log("level5 ")
            return res.status(401).json({message:'something went wrong with decoded!!'})
        }
    } catch (error) {
        console.log("level6")
        return res.status(500).json({message:error})
    }
}
     

        
      

module.exports=Auth;