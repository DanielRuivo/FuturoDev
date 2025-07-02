import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { useTheme } from '../../contexts/ThemeContext';

const TemplateDetFilmesPage = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app-layout ${isDarkMode ? 'dark' : 'light'}`}>
      <Header />
      <main className="main-content detalhes-filme-page">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default TemplateDetFilmesPage;

