
const mongoose=require('mongoose');
const Book =require('../Models/Book.js');


  
const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to db")
        async function postBookData(){
            for (let i=0;i<booksData.length;i++){
                const newBook=new Book(booksData[i])
                await newBook.save();
            }
            
        }
        postBookData();
        console.log("data pushed successfully!")
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;