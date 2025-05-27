import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div style={{ marginTop: '20px', maxWidth: '600px' }}>
      <h2>Details</h2>
      <p><strong>Title:</strong> {movie.Title}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
