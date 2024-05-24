import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import QuienesSomos from './components/QuienesSomos';
import Novedades from './components/Novedades';
import Alojamiento from './components/Alojamiento';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import ActividadDetalle from './components/ActividadDetalle'; // Importa el componente ActividadDetalle
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/alojamiento" element={<Alojamiento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/actividad/:id" element={<ActividadDetalle />} /> {/* Ruta para ActividadDetalle con un parámetro de ID */}
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
