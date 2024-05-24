import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/SevillaVirtual.png" alt="Sevilla Virtual" />
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
        {currentUser ? (
          <>
            <span className="user-name">{currentUser.username}</span>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
