import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Sevilla Virtual" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quienes-somos">Quienes Somos</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
          <li><Link to="/alojamiento">Alojamiento</Link></li>
        </ul>
      </nav>
      <div className="login">
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </header>
  );
}

export default Header;
