import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/logo sevilla.png" alt="Sevilla Virtual" />
          <span className="site-title">Sevilla Virtual: Descubre y Disfruta</span>
        </Link>
      </div>
      <nav className="navigation">
        <ul>
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
