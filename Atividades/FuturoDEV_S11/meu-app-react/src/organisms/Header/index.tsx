import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import ThemeToggleButton from '../../atoms/ThemeToggleButton'; // Importa o botão de tema

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">TicketOnline</Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <ThemeToggleButton /> {/* Usa o botão de tema real */}
      </nav>
    </header>
  );
};

export default Header;
