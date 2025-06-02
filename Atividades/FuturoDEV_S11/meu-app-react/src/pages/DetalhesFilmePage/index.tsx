import React from 'react';
import TemplateDetFilmesPage from '../../templates/TemplateDetFilmesPage';

const DetalhesFilmePage: React.FC = () => {
  // A Page agora simplesmente renderiza o Template correspondente
  // A lógica de buscar o filme pelo ID e passá-lo para o componente
  // já está dentro do TemplateDetFilmesPage
  return <TemplateDetFilmesPage />;
};

export default DetalhesFilmePage;
