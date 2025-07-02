import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2025 TicketOnline. Todos os direitos reservados.</p>
          <p>Sua loja de ingressos de cinema online</p>
        </div>
        <div className="footer-links">
          <span>🎬 Cinema • 🍿 Pipoca • 🎫 Ingressos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

