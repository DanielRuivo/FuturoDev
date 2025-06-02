import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Ou './App.jsx'
import './index.css'; // Se você tiver um arquivo CSS global

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);