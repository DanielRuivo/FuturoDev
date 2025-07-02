import React from 'react';
import MovieDetails from '../organisms/MovieDetails';
import { useNavigation } from '../../contexts/NavigationContext';

const DetFilmesPage = () => {
  const { selectedMovie } = useNavigation();

  return (
    <MovieDetails movie={selectedMovie} />
  );
};

export default DetFilmesPage;

