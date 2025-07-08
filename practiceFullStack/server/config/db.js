const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        await  mongoose.connect(process.env.mongoUrl);
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }

}
module.exports=connectDb;