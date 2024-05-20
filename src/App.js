import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import QuienesSomos from './components/QuienesSomos';
import Novedades from './components/Novedades';
import Alojamiento from './components/Alojamiento';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/alojamiento" element={<Alojamiento />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
