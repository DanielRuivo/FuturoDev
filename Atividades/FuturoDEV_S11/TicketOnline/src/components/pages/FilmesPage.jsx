import React from 'react';
import MovieGrid from '../organisms/MovieGrid';
import { moviesData } from '../../utils/moviesData';
import { useTheme } from '../../contexts/ThemeContext';

const FilmesPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`filmes-content ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="page-header">
        <h1>🎬 Filmes em Cartaz</h1>
        <p>Descubra os melhores filmes disponíveis em nosso cinema</p>
      </div>
      
      <MovieGrid movies={moviesData} />
    </div>
  );
};

export default FilmesPage;

