import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { useTheme } from '../../contexts/ThemeContext';

const TemplateContatoPage = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app-layout ${isDarkMode ? 'dark' : 'light'}`}>
      <Header />
      <main className="main-content contato-page">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default TemplateContatoPage;

