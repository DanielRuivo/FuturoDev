import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  genre: string;
  ageRating: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img src={movie.posterUrl} alt={`Cartaz do filme ${movie.title}`} className={styles.poster} />
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.genre}>Gênero: {movie.genre}</p>
        <p className={styles.ageRating}>Classificação: {movie.ageRating}</p>
        <Link to={`/filmes/${movie.id}`} className={styles.detailsButton}>
          Ver mais informações
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
