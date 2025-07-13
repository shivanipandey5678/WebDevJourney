const mongoose=require('mongoose');


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    author:{
        type:String,
        
    }, coverImage:{
        type:String,
       
    },
    availability:{
        type:Boolean,
        required:true
    }
})

const Book = mongoose.model("Book",bookSchema);

module.exports=Book;