import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './styles.module.css';

// Ícones placeholder simples
const SunIcon = () => <span>☀️</span>;
const MoonIcon = () => <span>🌙</span>;

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Alternar tema">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggleButton;
