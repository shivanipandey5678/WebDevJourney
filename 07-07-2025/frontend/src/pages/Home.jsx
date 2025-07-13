import React, { useEffect, useState ,useContext} from 'react'
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import BookCard from '../components/BookCard';
const Home = () => {
 
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {setAuthBooks,authBooks}=useContext(AuthContext)
  useEffect(() => {

    async function fetchBooks() {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8099/api/books');
        if (response.status == 200) {

          setAuthBooks(response.data.allBooks)
          setLoading(false)
          setError(false)
        }
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchBooks()
  }, [])

  if (loading) return <p className="text-center p-4">Loading books...</p>;
  if (error) return <p className="text-center p-4 text-red-500">Error loading books. Please try again.</p>;
  return (
    
    authBooks && <div className='flex justify-center flex-col '>
      {
       authBooks.map((book,i)=>(
        <BookCard {...book} key={book._id}/>
       ))
      }
    </div>
  )
}

export default Home
