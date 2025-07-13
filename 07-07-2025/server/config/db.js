const mongoose = require('mongoose');
const Book = require('../models/Book.Model');


const connectDb = async () => {
   await mongoose.connect(process.env.MONGO_URL);
   console.log("db connect at db.js")

}


module.exports = connectDb;