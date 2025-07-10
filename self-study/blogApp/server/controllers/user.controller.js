const express=require('express');
const Router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const auth=require('../middlewares/auth.js');
const checkAccess=require('../middlewares/checkAccess.js')
const User = require('../models/user.models');

Router.post("/register",async(req,res)=>{
    try {
        const {username,password,role}=req.body;
        let existUser=await User.findOne({username});
        if(existUser){
            return res.status(400).json({message:"user name taken!"})
        }
        const hashPassword= await bcrypt.hash(password,10);
        existUser=new User({username,password:hashPassword,role});
        const savedUser = await existUser.save();
        res.status(200).json({message:"usersaved!!",username:savedUser.name,role:savedUser.role});

        
    } catch (error) {
        return res.status(500).send(error)
    }
})

Router.post("/login",async(req,res)=>{
    try {
        const {username,password}=req.body;
        let existUser=await User.findOne({username});
        if(!existUser){
            return res.status(404).json({message:"user not found!!"})
        }
        const isValidPassword=await bcrypt.compare(password,existUser.password);
        if(!isValidPassword){
            return res.status(401).json({message:"wrong password!!"})
        }
        const accessToken=jwt.sign({username:existUser.username,password:existUser.password,id:existUser._id,role:existUser.role},process.env.accessTokenKey,{expiresIn:'30s'});
        const refreshToken=jwt.sign({username:existUser.username,password:existUser.password,id:existUser._id,role:existUser.role},process.env.REFRESH_KEY,{expiresIn:'1h'});
        return res.status(200).json({message:"login ho gya bhaii!!",accessToken,refreshToken})
    } catch (error) {
        return res.status(500).send(error)
    }
})


//all userlist only for admin
Router.get('/users',auth,checkAccess('admin'),async(req,res)=>{
     try {
        const allUsers=await User.find({});
        return res.status(200).json({message:"fetching successfully!!",allUsers});

     } catch (error) {
        return res.status(500).send(error)
     }
})

Router.post("/generateAccessToken",generateAccessToken=async(req,res)=>{
    try {
        const {refreshToken}=req.body;
        const decoded=jwt.verify(refreshToken,process.env.REFRESH_KEY)
        if(!decoded){
            return res.status(401).json({message:"something went wrong decoded!!"})
        }
        const {username,password}=await User.findById(decoded.id);
        const accessToken=jwt.sign({username,password},process.env.accessTokenKey,{expiresIn:'2m'});
        return res.status(200).json({message:"new accesstoken created!",accessToken})

    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports=Router;





