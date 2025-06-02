import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface MovieDetailsProps {
  movie: {
    id: number;
    title: string;
    posterUrl: string;
    genre: string;
    ageRating: string;
    synopsis: string; // Adicionando sinopse
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega para a página anterior no histórico
  };

  return (
    <div className={styles.detailsContainer}>
      <button onClick={handleGoBack} className={styles.backButton}>Voltar</button>
      <div className={styles.content}>
        <img src={movie.posterUrl} alt={`Cartaz do filme ${movie.title}`} className={styles.poster} />
        <div className={styles.info}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p><strong>Gênero:</strong> {movie.genre}</p>
          <p><strong>Classificação Indicativa:</strong> {movie.ageRating}</p>
          <h3 className={styles.synopsisTitle}>Sinopse</h3>
          <p className={styles.synopsisText}>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
