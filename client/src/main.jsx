// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que el archivo CSS esté importado correctamente
import Home from './pages/home'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home /> {/* Asegúrate de que el componente Home se está renderizando */}
  </React.StrictMode>
);
