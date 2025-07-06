import React from 'react'
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`}>More Info</Link>
    </div>
  )
}

export default MovieCard
