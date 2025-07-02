import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation deve ser usado dentro de um NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigateTo = (page, movieData = null) => {
    setCurrentPage(page);
    if (movieData) {
      setSelectedMovie(movieData);
    }
  };

  const value = {
    currentPage,
    selectedMovie,
    navigateTo
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

