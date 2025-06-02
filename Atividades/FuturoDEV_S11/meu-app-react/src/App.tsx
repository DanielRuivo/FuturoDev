import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './organisms/Header';
import InicioPage from './pages/InicioPage';
import FilmesPage from './pages/FilmesPage';
import ContatoPage from './pages/ContatoPage';
import DetalhesFilmePage from './pages/DetalhesFilmePage'; // Importa a página real

// Placeholder para o Footer
const FooterPlaceholder: React.FC = () => <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center', marginTop: 'auto' }}>Footer Simples</footer>;

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/filmes" element={<FilmesPage />} />
            {/* Atualiza a rota para usar o componente real */}
            <Route path="/filmes/:id" element={<DetalhesFilmePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <FooterPlaceholder />
      </div>
    </Router>
  );
}

export default App;
