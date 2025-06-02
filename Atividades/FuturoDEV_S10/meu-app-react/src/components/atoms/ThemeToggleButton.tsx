import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../theme/ThemeContext';
import styles from './ThemeToggleButton.module.css';

const ThemeToggleButton: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  return (
    <IconButton 
      onClick={toggleColorMode} 
      color="inherit"
      className={styles.themeToggle}
      aria-label="toggle theme"
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
