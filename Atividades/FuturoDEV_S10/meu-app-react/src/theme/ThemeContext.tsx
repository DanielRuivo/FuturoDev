import { createTheme, ThemeProvider } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import React, { createContext, useContext, useMemo, useState } from 'react';

// Definindo as cores para os temas claro e escuro
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Tema claro (tons de marrom)
          primary: {
            main: '#c2a39a',
            light: '#e1d1c8',
            dark: '#a58579',
          },
          background: {
            default: '#f8f5f3',
            paper: '#ffffff',
          },
          text: {
            primary: '#3c3c3c',
            secondary: '#6b6b6b',
          },
        }
      : {
          // Tema escuro (tons de verde)
          primary: {
            main: '#0a3007',
            light: '#1e4e1a',
            dark: '#001600',
          },
          background: {
            default: '#001600',
            paper: '#0a3007',
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#a0a0a0',
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: '8px',
        },
      },
    },
  },
});

// Criando o contexto para o tema
type ThemeContextType = {
  toggleColorMode: () => void;
  mode: PaletteMode;
};

export const ThemeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
  mode: 'light',
});

// Hook personalizado para usar o contexto do tema
export const useThemeContext = () => useContext(ThemeContext);

// Provedor do tema
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  // Função para alternar entre os temas
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Criando o tema com base no modo atual
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
