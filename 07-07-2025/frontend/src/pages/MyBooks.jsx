import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8099/api/mybooks', { withCredentials: true })
      .then((res) => {
        setMyBooks(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setErr(true);
        setLoading(false)
      })
  }, [])




  const handleStatusChange = async (bookId, newStatus) => {
    try {
      const res = await axios.patch(`http://localhost:8099/api/mybooks/${bookId}/status`, { status: newStatus }, { withCredentials: true });
      alert('state updated!!')
    } catch (error) {
      alert('error in updating status')
    }
  };

  const handleRatingChange = async (bookId, newRating) => {
    try {
      const res = await axios.patch(`http://localhost:8099/api/mybooks/${bookId}/rating`, { rating: Number(newRating) }, { withCredentials: true });
      alert('rating updated,refresh the page to see update')
    } catch (error) {
      alert('error in updating rating')
    }
  };

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Something went wrong!</p>;


  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 underline text-center">🏡 My Books</h2>
      {
        myBooks.map((book) => (
          <div key={book._id} className='bg-gray-300 mb-4 shadow-md rounded p-4  w-1/2 mx-auto hover:border-2 hover-bg-white hover-border-gray transition delay-75 ease-in-out'>
            {book.book ? (<>
              <p className='font-semibold  uderline '>Author: {book.book.author}</p>
              <img src={book.book.coverImage} alt="" className='rounded w-25 my-6' />
              <select value={book.status} onChange={(e) => handleStatusChange(book.bookId, e.target.value)} className='border px-2 py-1 shadow rounded' >
                <option value="Want to Read">Want to Read</option>
                <option value="Currently Reading">Currently Reading</option>
                <option value="Read">Read</option>
              </select>

              <select value={Number(book.rating)} onChange={(e) => handleRatingChange(book.bookId, e.target.value)} className='border px-4 py-1 shadow rounded ml-4' >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>


            </>) : (<p className="text-red-500">books details not provided</p>)}
          </div>
        ))
      }

    </div>
  )
}

export default MyBooks
