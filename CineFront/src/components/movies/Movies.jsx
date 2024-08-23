import React from 'react';
import MovieItem from '../movieItem/MovieItem';

const Movies = ({ movies }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          director={movie.director}
          description={movie.description}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
};

export default Movies;
