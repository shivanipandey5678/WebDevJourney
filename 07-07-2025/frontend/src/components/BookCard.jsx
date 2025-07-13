import React ,{useContext}from 'react';
import { AuthContext } from '../context/AuthProvider';

const BookCard = ({title,author,availability,coverImage}) => {
  const {isAuth}=useContext(AuthContext);
  async function addMyBook(req,res){
     if(isAuth==null || isAuth==False){
      alert("please login first!!")
     }
  }
  return (
    <div className='w-full  bg-gray-100 min-h-screen flex justify-center flex-col '>

    <div className='w-1/3 shadow-md rounded-lg p-4 bg-white mx-auto'>
        <h2 className='font-semibold underline my-2' > {title}</h2>
        <img src={coverImage} alt="coverImage" />
         <div >
            <span>-<strong>{availability}</strong></span>
            <span>{author}</span>
         </div>
         <button className='px-2 py-1 rounded border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white my-4'>Want To Read</button>
      
    </div>
    </div>
  )
}

export default BookCard
