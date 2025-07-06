import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';

const Home = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

    const handleSearch=async()=>{
        setLoading(true)
        setError('');

        try {
            const res=await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
            const data=await res.json();
            if(data.Response=='True'){
                console.log(data)
                setMovies(data.Search)
            }else{
                setError(data.Error);
                setMovies([]);
            }


        } catch (error) {
            setError('Something went wrong!')
        }finally{
            setLoading(false)
        }
    }
  return (
    <div style={{padding:'20px'}} id='wrapper'>
      <h2>🎬 Movie Search</h2>
      <input type="text"  placeholder="Enter movie title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading....</p>}
      {error && <p style={{ color: 'red' }} >Something went wrong....</p>}
      <div style={{display: 'flex', flexDirection:'column', gap: '20px'}}>

      {movies.map((movie)=>(
        <MovieCard key={movie.imdbID} movie={movie}/>
      ))}
      </div>
    </div>
  )
}

export default Home
