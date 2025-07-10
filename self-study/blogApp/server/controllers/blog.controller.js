const Blog=require('../models/blog.model')
const express=require('express');
const Router=express.Router();
const checkAccess =require('../middlewares/checkAccess.js')
const auth=require('../middlewares/auth.js')

Router.get("/blogs",async(req,res)=>{
    try {
        const allBlog=await Blog.find().populate('author',"username role");
        return res.status(200).json({message:"fetch blog successfully",allBlog})
    } catch (error) {
        return res.status(500).json({error})
    }
})

//create a new blog by author
Router.post("/blogs",auth,checkAccess("author"),async(req,res)=>{
    try {
        
        const newPost=req.body;
        const {title,content}=req.body;
        const authorId=req.user?.id;
        console.log({"authorId at post blog":authorId})
        if(!title || !content ){
            return res.status(400).json({message:"please provide complete data!!"})
        }

        const existingBlog = await Blog.findOne({ title });

        if (existingBlog) {
        return res.status(400).json({ message: "Please provide a different title!!" });
        }

        const newBlog=new Blog({title,content,author:authorId});
        const savedBlog=await newBlog.save();
        res.status(200).json({message:"saved new  blog",savedBlog});
       
    } catch (error) {
        return res.status(500).json({error})
    }
})



//get blog by author id 
Router.get("/blogs/:id",async(req,res)=>{
    try {
        const {id}=req.params.id;
        const existBlog=await Blog.find({author:id});
        if(!existBlog){
            return res.status(404).json({message:"blog not found!!"})
        };

        return res.status(200).json({message:"blog byr single author fetch successfully",existBlog})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//Router for edit any blog

Router.patch("/blogs/:id",auth,checkAccess(['admin','author']),async(req,res)=>{
    try {
        
        const {id}=req.params;
        const searchedblog=await Blog.findById(id);
        if(req.user.role=='admin' || req.user._id.equals(searchedblog.author)){
        const updatedFields=req.body;
        const updatedBlog=await Blog.findByIdAndUpdate(id,updatedFields,{new:true});
        if(!updatedBlog){
            return res.status(404).json({message:"blog not found!!"})
        };
     
        return res.status(200).json({message:"single blog updated successfully",updatedBlog})
        
    }else{
        return res.status(403).json({message:"access denied"})
    }
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});

Router.delete("/blogs/:id",auth,checkAccess(['admin','author']),async(req,res)=>{
    try {
        const {id}=req.params;
        const searchedblog=await Blog.findById(id);
      
        if(req.user.role=='admin' || req.user._id.equals(searchedblog.author)){

            const deletedBlog=await Blog.findByIdAndDelete(id);
            if(!deletedBlog){
                return res.status(404).json({message:"blog not found!!"})
            };
            return res.status(200).json({message:"single blog deleted successfully",deletedBlog})
        }else{
            return res.status(403).json({message:"access denied"})
        }
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})



module.exports=Router;