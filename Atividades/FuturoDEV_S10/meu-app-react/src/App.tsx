import React from 'react';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { PlantStore } from './pages';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <ThemeContextProvider>
      <PlantStore />
    </ThemeContextProvider>
  );
}

export default App;

