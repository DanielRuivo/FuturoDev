import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import PlantStore from './pages/PlantStore';
import { ThemeContextProvider } from './theme/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <PlantStore />
    </ThemeContextProvider>
  </React.StrictMode>,
);
