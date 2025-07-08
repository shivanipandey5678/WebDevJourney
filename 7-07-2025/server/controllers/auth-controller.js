const jwt =require('jsonwebtoken');
const User=require('../Models/User')
const blockList=require('../utils/tokenBlocklist.js')
const bcrypt=require('bcrypt');

//register
const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
       if(!name || !email || !password){
        return res.status(400).json({error:'plaese provide complete info!!'})
       }
       const searchedUser=await User.findOne({name});
       if(searchedUser){
          return res.status(409).json({error:'username already exist!!'})
       }

       const salt=await bcrypt.genSalt(10);
       const hashPassword=await bcrypt.hash(password,salt);

       const newUser = new User({name,email,password:hashPassword});
       await newUser.save()
       res.status(201).json({ message: 'User registered successfully', user: {name:newUser.name,email:newUser.email} });

    } catch (error) {
        return res.status(401).json({error:'something went wrong in registerUser!!'})
    }
}

//login

const loginUser = async(req,res) =>{
    const {name,password}=req.body;
    try {
          if(!name || !password){
            return res.status(401).json({error:'please provide all fields!!'})
           }
           const searchedUser=await User.findOne({name});
           if(!searchedUser){
              return res.status(404).json({error:'user not found!!'});
           }
             const isMatch=await bcrypt.compare(password,searchedUser.password);
             if(!isMatch){
              return res.status(401).json({ error: 'Invalid credentials!' });
             }
             const token=jwt.sign({name,id:searchedUser._id},process.env.JWT_SECREAT_TOKEN,{expiresIn:'3d'});
            
             return res.status(200).json({ message: 'User logged in  successfully',token});
           }
     catch (error) {
        return res.status(401).json({error:'something went wrong in registerUser!!'})
    }

  }

const logout=async(req,res)=>{
    const token=req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Token missing" });
      }
   
    blockList.push(token);
    return res.status(200).json({ message: "Logged out" });

  
}

const getMyInfo=async(req,res)=>{
    const {id}=req.auth;
    try {
        const user=await User.findById(id);
        if(!user ){
          return res.status(404).json({message:' User not found!'})
        }
        return res.status(200).json({ message: 'User fetched successfully', user });
      } catch (error) {
        return res.status(500).json({error:'something went wrong in getMyInfo!!'})
      }
    
}


 module.exports={getMyInfo,logout,loginUser,registerUser};
        

 

   