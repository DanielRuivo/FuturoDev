import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';

// Templates
import TemplateInicioPage from './components/templates/TemplateInicioPage';
import TemplateFilmesPage from './components/templates/TemplateFilmesPage';
import TemplateDetFilmesPage from './components/templates/TemplateDetFilmesPage';
import TemplateContatoPage from './components/templates/TemplateContatoPage';

// Pages
import InicioPage from './components/pages/InicioPage';
import FilmesPage from './components/pages/FilmesPage';
import DetFilmesPage from './components/pages/DetFilmesPage';
import ContatoPage from './components/pages/ContatoPage';

// Styles
import './styles/components.css';

const AppRouter = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <TemplateInicioPage>
            <InicioPage />
          </TemplateInicioPage>
        );
      
      case 'filmes':
        return (
          <TemplateFilmesPage>
            <FilmesPage />
          </TemplateFilmesPage>
        );
      
      case 'detalhes-filme':
        return (
          <TemplateDetFilmesPage>
            <DetFilmesPage />
          </TemplateDetFilmesPage>
        );
      
      case 'contato':
        return (
          <TemplateContatoPage>
            <ContatoPage />
          </TemplateContatoPage>
        );
      
      default:
        return (
          <TemplateInicioPage>
            <InicioPage />
          </TemplateInicioPage>
        );
    }
  };

  return renderPage();
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppRouter />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;

