import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';



const BookCard = ({ title, author, availability, coverImage, _id }) => {
  const { isAuth } = useContext(AuthContext);


  async function AddBookToMyBook(bookId) {
    if (isAuth == null || isAuth == false) {
      alert("please login first!!");
      return;
    }
    try {

      const response = await axios.post(`http://localhost:8099/api/mybooks/${bookId}`, {}, { withCredentials: true });
      if (response.status == 200) {
        alert("📚 Book Added to your list!");

      }
    } catch (error) {
      if (error.response?.status == 400) {
        alert(" Book already added!");
      } else {
        alert(" Something went wrong!");
      }
    }
  }

  return (
    <div className='w-full  bg-gray-100 min-h-screen flex justify-center flex-col '>

      <div className='w-1/3 shadow-md rounded-lg p-4 bg-white mx-auto'>
        <h2 className='font-semibold underline my-2' > {title}</h2>
        <img src={coverImage} alt="coverImage" className='rounded w-35 my-6' />
        <div >
          <span>-<strong>{availability}</strong></span>
          <span>{author}</span>
        </div>
        <button className='px-2 py-1 rounded border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white my-4' onClick={() => { AddBookToMyBook(_id) }}>Want To Read</button>

      </div>
    </div>
  )
}

export default BookCard
