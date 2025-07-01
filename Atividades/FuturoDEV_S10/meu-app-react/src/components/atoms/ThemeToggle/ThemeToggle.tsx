import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}>
      <IconButton onClick={toggleTheme} color="inherit">
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

