import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';

const MovieCard = ({ movie }) => {
  const { isDarkMode } = useTheme();
  const { navigateTo } = useNavigation();

  const handleVerMais = () => {
    navigateTo('detalhes-filme', movie);
  };

  return (
    <div className={`movie-card ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="movie-poster">
        <img 
          src={movie.imagem} 
          alt={`Poster do filme ${movie.nome}`}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450/cccccc/666666?text=Sem+Imagem';
          }}
        />
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.nome}</h3>
        
        <div className="movie-details">
          <span className="movie-genre">
            🎭 {movie.genero}
          </span>
          <span className="movie-age">
            🔞 {movie.idadeIndicada}
          </span>
        </div>
        
        <button 
          className="btn-ver-mais"
          onClick={handleVerMais}
        >
          Ver mais informações
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

