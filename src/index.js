// Importa la biblioteca React, necesaria para crear componentes
import React from 'react';

// Importa ReactDOM para renderizar componentes React en el DOM
import ReactDOM from 'react-dom';

// Importa el archivo de estilos CSS global para la aplicación
import './index.css';

// Importa el componente principal de la aplicación
import App from './App';

// Importa una función para medir el rendimiento de la aplicación
import reportWebVitals from './reportWebVitals';

// Renderiza el componente App dentro de un modo estricto de React para resaltar posibles problemas
ReactDOM.render(
  <React.StrictMode>
    {/* Renderiza el componente App */}
    <App />
  </React.StrictMode>,
  // Selecciona el elemento del DOM con id 'root' como el contenedor para la aplicación
  document.getElementById('root')
);

// Llama a reportWebVitals para medir el rendimiento de la aplicación
reportWebVitals();
