import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Estilos globais
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext'; // Importa o ThemeProvider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider> {/* Envolve o App com o ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
