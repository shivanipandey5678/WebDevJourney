const Book = require('../models/Book.Model.js');
const MyBook=require('../models/MyBook.Model.js');
const express=require('express');
const Router=express.Router();
const Auth=require('../middlewares/Auth.js')

//Fetch user’s books
const userBook=async(req,res)=>{
     const userId = req.user.id; 
    try {
        const existMyBook=await MyBook.find({userId}).populate('bookId');
        if(!existMyBook||  existMyBook.length === 0){
            return res.status(404).json({message:"No book found for this user!"})
        };
        return  res.status(200).json({ message: "MyBook fetched", data: existMyBook });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Add book to user's list
const addBookToUserList=async(req,res)=>{
    const userId=req.user.id;
    const {bookId} = req.params;
    const newBookId=bookId;
    try {
        const exists=await MyBook.findOne({userId});
        if(exists ){
            return res.status(400).json({ message: "Book already added to your list." });
        };

        const newEntry=new MyBook({
            userId,
            bookId,
            status:'Want to Read'
        })
        const saved=await newEntry.save();
        return res.status(201).json({message:"Book added to your list!",data: saved})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


//Update reading status
const updateReadingStatus = async(req,res)=>{
    try {
        const userId=req.user.id;
        const {bookId} = req.params;
        const {status}=req.body;
        const updated=await MyBook.findOneAndUpdate({userId,bookId},{$set:{status}} ,{new:true});
        if (!updated) {
            return res.status(404).json({ message: "Book not found for this user" });
          }
        return res.status(200).json({ message: "Reading status updated successfully!", data:updated})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//update rating
const updateBookRating=async(req,res)=>{
    const userId=req.user.id;
    const {bookId} =req.params;
    const {rating}=req.body;
    try {
        const updated=await MyBook.findOneAndUpdate({userId,bookId},{$set:{rating}}, { new: true });
        if (!updated) {
            return res.status(404).json({ message: "Book not found in your list." });
          }
        return res.status(200).json({ message: "Rating updated successfully!", data:updated}) 
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

Router.get('/',Auth,userBook);
Router.post('/:bookId',Auth,addBookToUserList);
Router.patch('/:bookId/status',Auth,updateReadingStatus);
Router.patch('/:bookId/rating',Auth,updateBookRating);

module.exports=Router;
   


