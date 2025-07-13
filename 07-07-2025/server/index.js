const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db.js');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/auth.Controller.js');
const booksController = require('./controllers/Books.Controller.js');
const myBooksControllers = require('./controllers/MyBooks.Controller.js');
const Book = require('./models/Book.Model.js');
const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/auth', authController);
app.use('/api', booksController);
app.use('/api/mybooks', myBooksControllers)




const books = [
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    coverImage: "https://placehold.co/300x300/FF5733/FFFFFF?text=The+Pragmatic+Programmer",
    availability: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    coverImage: "https://placehold.co/300x300/3498DB/FFFFFF?text=Clean+Code",
    availability: true
  }
];

const insertBooks = async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("Books inserted successfully ");

  } catch (error) {
    console.error("Error inserting books", error);
  }
}


app.listen(PORT, async () => {
  await connectDb();
  await insertBooks()
  console.log(`listen at index.js at ${PORT} `)
});