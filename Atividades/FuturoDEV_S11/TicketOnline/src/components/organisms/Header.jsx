import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentPage, navigateTo } = useNavigation();

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'filmes', label: 'Filmes' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <div className="logo">
          <h1>🎬 TicketOnline</h1>
        </div>
        
        <nav className="navigation">
          <ul className="nav-menu">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => navigateTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="theme-toggle">
          <button
            className="theme-button"
            onClick={toggleTheme}
            title={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

