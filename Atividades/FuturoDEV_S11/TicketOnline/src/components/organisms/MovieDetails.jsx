import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';

const MovieDetails = ({ movie }) => {
  const { isDarkMode } = useTheme();
  const { navigateTo } = useNavigation();

  const handleVoltar = () => {
    navigateTo('filmes');
  };

  if (!movie) {
    return (
      <div className={`movie-details-error ${isDarkMode ? 'dark' : 'light'}`}>
        <p>Filme não encontrado.</p>
        <button className="btn-voltar" onClick={handleVoltar}>
          ← Voltar para Filmes
        </button>
      </div>
    );
  }

  return (
    <div className={`movie-details ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="movie-details-container">
        <button className="btn-voltar" onClick={handleVoltar}>
          ← Voltar
        </button>
        
        <div className="movie-details-content">
          <div className="movie-poster-large">
            <img 
              src={movie.imagem} 
              alt={`Poster do filme ${movie.nome}`}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x600/cccccc/666666?text=Sem+Imagem';
              }}
            />
          </div>
          
          <div className="movie-info-detailed">
            <h1 className="movie-title-large">{movie.nome}</h1>
            
            <div className="movie-metadata">
              <div className="metadata-item">
                <span className="metadata-label">🎭 Gênero:</span>
                <span className="metadata-value">{movie.genero}</span>
              </div>
              
              <div className="metadata-item">
                <span className="metadata-label">🔞 Idade Indicada:</span>
                <span className="metadata-value">{movie.idadeIndicada}</span>
              </div>
            </div>
            
            <div className="movie-synopsis">
              <h3>📖 Sinopse</h3>
              <p>{movie.sinopse}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

