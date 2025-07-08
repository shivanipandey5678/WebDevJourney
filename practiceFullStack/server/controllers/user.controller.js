const UserModel=require('../models/User.js');
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const blockList =require('../blockList.js')

//Routes
router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name ||!email||!password){
       return  res.status(400).json({message:"please provide complete info!"})
    }
    const existUser=await UserModel.findOne({name});
    if(existUser){
        return res.status(400).json({message:"username already exist!"})
    };
  

    try {
       
        const newUser=new UserModel({name,email,password});
        await newUser.save();
        console.log("register")
        return res.status(201).json({message:"register successfully!"})
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }


})

//login
router.post("/login",async(req,res)=>{
    const {name,password}=req.body;
    if(!name ||!password){
        return  res.status(400).json({message:"please provide complete info!"})
     }
   
     try {
        const existUser=await UserModel.findOne({name});
        if(!existUser){
            return res.status(404).json({message:"User not found!"})
        };
        const excessToken=jwt.sign({name:existUser.name},process.env.screatKey,{expiresIn:'20s'});
        const RefreshToken=jwt.sign({name:existUser.name},process.env.refreshKey,{expiresIn:'1h'})
        res.json({message:"register ho gya bhai!!",excessToken,RefreshToken});
        
     } catch (error) {
        res.status(500).json({message:"something went wrong"})
     }
    
})


router.post('/logout',(req,res)=>{
    const token=req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'token is missing!!'});
    }
    blockList.push(token);
    return res.status(200).json({message:"user deleted!!"})
})

router.post('/generateAccessToken',(req,res)=>{
   const refreshToken=req.body.token;
   const decoded=jwt.verify(refreshToken,process.env.refreshKey);
    if(!decoded){
        return res.status(401).json({message:'something went wrong with decoded!!'})
    }
    const createAccessToken=jwt.sign({name:decoded.name},process.env.screatKey,{expiresIn:'20s'});
    res.status(200).json({message:'new access key craeted!',createAccessToken})

})
module.exports=router;