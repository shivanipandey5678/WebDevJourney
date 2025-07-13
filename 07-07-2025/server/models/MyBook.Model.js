const mongoose=require('mongoose');
const mybookSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
         required:true,
        ref:'Book'
    },
    status:{
        type:String,
        enum:["Want to Read","Currently Reading","Read"]
    },
    rating:{
        type:Number,
        min:[1,"Rating must be at least 1"],
        max:[5,"Rating cannot be more than 5"]
    }
})

const MyBook = mongoose.model("MyBook",mybookSchema);

module.exports=MyBook;