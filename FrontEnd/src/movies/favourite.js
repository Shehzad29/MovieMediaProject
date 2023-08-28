import React from 'react';
// import '../styles/favourite.css'; // Make sure the import path matches your file structure
import { IMG_URL, getcolor } from '../App';

function Favorite({ favoriteMovies, onMovieClick }) {
  return (
    <main id="main">
      {favoriteMovies.map((movie) => (
        <div key={movie.id} className="movie" onClick={() => onMovieClick(movie)}>
          <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />

          <div className="movieInfo">
            <h3 color='white'>{movie.title}</h3>
            <span className={getcolor(movie.vote_average)}>{movie.vote_average}</span>
          </div>

          <div className="movieOverview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          

          {/* Add buttons here if needed */}
        </div>
      ))}
    </main>
  );
}

export default Favorite;
