// Importa la biblioteca React, necesaria para crear componentes
import React from 'react';

// Importa componentes necesarios para el enrutamiento desde react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes que representan las diferentes páginas de la aplicación
import Home from './components/Home';
import QuienesSomos from './components/QuienesSomos';
import Novedades from './components/Novedades';
import Alojamiento from './components/Alojamiento';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import ActividadDetalle from './components/ActividadDetalle'; 

// Importa el archivo de estilos CSS para la aplicación
import './App.css';

// Define el componente principal de la aplicación
function App() {
  return (
    // Envuelve la aplicación en un Router para habilitar el enrutamiento
    <Router>
      {/* Contenedor principal de la aplicación con una clase CSS */}
      <div className="app-container">
        {/* Renderiza el componente Header en la parte superior */}
        <Header />
        {/* Elemento main que contiene el contenido principal de la aplicación */}
        <main className="content">
          {/* Contenedor para definir las rutas de la aplicación */}
          <Routes>
            {/* Define la ruta para la página de inicio, renderizando el componente Home */}
            <Route path="/" element={<Home />} />
            {/* Define la ruta para la página "Quiénes Somos", renderizando el componente QuienesSomos */}
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            {/* Define la ruta para la página "Novedades", renderizando el componente Novedades */}
            <Route path="/novedades" element={<Novedades />} />
            {/* Define la ruta para la página "Alojamiento", renderizando el componente Alojamiento */}
            <Route path="/alojamiento" element={<Alojamiento />} />
            {/* Define la ruta para la página de inicio de sesión, renderizando el componente Login */}
            <Route path="/login" element={<Login />} />
            {/* Define la ruta para la página de registro, renderizando el componente Register */}
            <Route path="/register" element={<Register />} />
            {/* Define una ruta dinámica para los detalles de una actividad, renderizando el componente ActividadDetalle */}
            <Route path="/actividad/:id" element={<ActividadDetalle />} /> 
          </Routes>
        </main>
        {/* Renderiza el componente Footer en la parte inferior */}
        <Footer />
      </div>
    </Router>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos
export default App;

