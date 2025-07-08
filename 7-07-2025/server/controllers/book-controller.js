
const Book=require('../Models/Book');

//get all books public route
const getAllBooks=async(req,res)=>{
    try {
        const allBooks=await Book.find({});
        if(allBooks.length === 0){
            return res.status(404).json({message:'no book found!'})
        }
        return res.status(200).json({ message: 'books fetched successfully', allBooks });
        
    } catch (error) {
        return res.status(500).json({error:'something went wrong in fetching books!!'})
    }
}

//get single book
const getBook=async(req,res)=>{
  const {id}=req.params;
 
  try {
    const book=await Book.findById(id);
    if(!book){
      return res.status(404).json({message:' book not found!'})
    }
    return res.status(200).json({ message: 'book fetched successfully', book });
  } catch (error) {
    return res.status(500).json({error:'something went wrong in fetching book!!'})
  }

}

module.exports={  getAllBooks,getBook}

