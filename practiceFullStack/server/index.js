const express=require('express');
const dotenv=require('dotenv');
const auth=require('./middleware/Autherization.js')

dotenv.config();
const app=express();
const userController=require('./controllers/user.controller.js')


//config DB
const connectDb=require('./config/db.js');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//controllers
app.use('/users',userController);


app.get("/health-check",(req,res)=>{
    res.send("health is good!!")
})


app.get("/private-route",auth,(req,res)=>{
    res.send("Private data😱!!")
})
const PORT=process.env.PORT ||5000;
app.listen(PORT,async()=>{
    await connectDb();
    console.log(`Server is listening at ${PORT} at index.js`)
})
