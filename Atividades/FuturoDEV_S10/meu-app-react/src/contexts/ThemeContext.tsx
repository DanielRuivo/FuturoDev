import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#c2a39a',
        light: '#e1d1c8',
        dark: '#a08a7f',
      },
      background: {
        default: '#fafafa',
        paper: '#e1d1c8',
      },
      text: {
        primary: '#2c2c2c',
        secondary: '#5a5a5a',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#e1d1c8',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#e1d1c8',
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0a3007',
        light: '#2d5a29',
        dark: '#001600',
      },
      background: {
        default: '#121212',
        paper: '#0a3007',
      },
      text: {
        primary: '#ffffff',
        secondary: '#b3b3b3',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#0a3007',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#0a3007',
          },
        },
      },
    },
  });

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

