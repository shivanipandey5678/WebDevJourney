const Book = require('../models/Book.Model.js');

const express = require('express');
const Router = express.Router();
const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();
        if (allBooks.length == 0) {
            return res.status(200).json({ message: "no book found", data: [] })
        }
        return res.status(200).json({ message: "all book fetched succesfully", allBooks })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

Router.get("/books", getAllBooks);


module.exports = Router;