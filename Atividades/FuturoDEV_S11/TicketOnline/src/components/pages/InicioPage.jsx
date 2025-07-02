import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';
import cinemaImage from '../../assets/images/cinema-front.jpg';

const InicioPage = () => {
  const { isDarkMode } = useTheme();
  const { navigateTo } = useNavigation();

  return (
    <div className={`inicio-content ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Bem-vindo ao TicketOnline</h1>
          <p>Sua experiência cinematográfica começa aqui!</p>
          <p>Descubra os melhores filmes em cartaz e garante já o seu ingresso.</p>
          
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => navigateTo('filmes')}
            >
              🎬 Ver Filmes em Cartaz
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={cinemaImage} 
            alt="Frente do cinema" 
            className="cinema-image"
          />
        </div>
      </div>
      
      <div className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎫</div>
            <h3>Ingressos Online</h3>
            <p>Compre seus ingressos de forma rápida e segura</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🍿</div>
            <h3>Experiência Completa</h3>
            <p>Desfrute da melhor experiência cinematográfica</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Filmes em Destaque</h3>
            <p>Os melhores lançamentos e clássicos do cinema</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioPage;

