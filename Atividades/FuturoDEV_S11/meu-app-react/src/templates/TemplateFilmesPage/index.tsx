import React from 'react';
import TemplateBase from '../TemplateBase';
import MovieGrid from '../../organisms/MovieGrid';

// Reutilizando o mock de dados da FilmesPage original
const mockMovies = [
  {
    id: 1,
    title: 'A Origem',
    posterUrl: 'https://via.placeholder.com/250x350/0000FF/FFFFFF?text=A+Origem',
    genre: 'Ficção Científica, Ação',
    ageRating: '14',
  },
  {
    id: 2,
    title: 'Interestelar',
    posterUrl: 'https://via.placeholder.com/250x350/FF0000/FFFFFF?text=Interestelar',
    genre: 'Ficção Científica, Drama',
    ageRating: '12',
  },
  {
    id: 3,
    title: 'O Poderoso Chefão',
    posterUrl: 'https://via.placeholder.com/250x350/008000/FFFFFF?text=Poderoso+Chefão',
    genre: 'Drama, Crime',
    ageRating: '16',
  },
  {
    id: 4,
    title: 'Batman: O Cavaleiro das Trevas',
    posterUrl: 'https://via.placeholder.com/250x350/FFFF00/000000?text=Cavaleiro+Trevas',
    genre: 'Ação, Crime, Drama',
    ageRating: '12',
  },
  {
    id: 5,
    title: 'Pulp Fiction: Tempo de Violência',
    posterUrl: 'https://via.placeholder.com/250x350/FFA500/000000?text=Pulp+Fiction',
    genre: 'Crime, Drama',
    ageRating: '18',
  },
  {
    id: 6,
    title: 'Clube da Luta',
    posterUrl: 'https://via.placeholder.com/250x350/800080/FFFFFF?text=Clube+da+Luta',
    genre: 'Drama',
    ageRating: '18',
  },
];

const TemplateFilmesPage: React.FC = () => {
  return (
    <TemplateBase>
      <div>
        <h2>Filmes em Cartaz</h2>
        <MovieGrid movies={mockMovies} />
      </div>
    </TemplateBase>
  );
};

export default TemplateFilmesPage;
