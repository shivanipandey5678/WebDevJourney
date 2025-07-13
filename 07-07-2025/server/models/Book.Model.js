const mongoose=require('mongoose');


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    }, coverImage:{
        type:String,
        unique:true
    },
    availability:{
        type:Boolean,
        required:true
    }
})

const Book = mongoose.model("Book",bookSchema);

module.exports=Book;