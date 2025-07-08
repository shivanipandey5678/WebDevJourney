const mongoose=require('mongoose');


const userBookSchema=new mongoose.Schema({
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       required: true

    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required: true

    },
    status:{
        type:String,
        enum:["Want to Read","Currently Reading" , "Read"],
        default:'Want to Read'

    },
    rating:{
        type:Number,
        max:5,
        min:1

    }
})

const UserBook=mongoose.model('UserBook',userBookSchema);
module.exports=UserBook;