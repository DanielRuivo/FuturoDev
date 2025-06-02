import React from 'react';
import MovieCard from '../../molecules/MovieCard';
import styles from './styles.module.css';

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  genre: string;
  ageRating: string;
}

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
