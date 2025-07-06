import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
    const {id}=useParams();
    const [movie,setMovie]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


    useEffect(()=>{
        const fetchMovie=async()=>{
            setLoading(false);
            try {
                const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
                const data = await res.json();
                if (data.Response === "True") {
                  setMovie(data);
                } else {
                  setError(data.Error);
                }
            } catch (error) {
                setError('Failed to fetch movie.');
            }finally {
                setLoading(false);
            };
        }
        fetchMovie();
    },[id])

   
  return (
    <div style={{ padding: '20px' }}>
         {loading && <p>Loading....</p>}
         {error && <p style={{ color: 'red' }} >Something went wrong....</p>}
         <img src={movie.Poster} alt={movie.Title} />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  )
}

export default MovieDetails
