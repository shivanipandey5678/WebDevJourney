const dotenv=require('dotenv');
const express=require('express');
dotenv.config();
const app=express();
const userController=require('./controllers/user.controller.js')

const dbConnect=require('./config/db.js')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/health-check",(req,res)=>{
    res.send('health is well bhiaya!!')
});

app.use("/users",userController);



app.listen(process.env.PORT,async()=>{
    await dbConnect();
    console.log(`app listen at ${process.env.PORT}`);
});