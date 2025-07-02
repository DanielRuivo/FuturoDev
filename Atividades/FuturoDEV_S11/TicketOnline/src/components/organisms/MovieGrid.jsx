import React from 'react';
import MovieCard from '../molecules/MovieCard';
import { useTheme } from '../../contexts/ThemeContext';

const MovieGrid = ({ movies }) => {
  const { isDarkMode } = useTheme();

  if (!movies || movies.length === 0) {
    return (
      <div className={`no-movies ${isDarkMode ? 'dark' : 'light'}`}>
        <p>Nenhum filme disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className={`movie-grid ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="grid-container">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
          />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;

