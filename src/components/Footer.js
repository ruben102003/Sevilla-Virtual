import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sevilla Virtual</h2>
          <p>
            Sevilla Virtual es tu guía esencial para explorar monumentos, alojamientos y actividades
            turísticas en una experiencia de viaje única.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Enlaces Útiles</h2>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/quienes-somos">Quienes Somos</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/alojamiento">Alojamiento</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contacto</h2>
          <p>Email: info@sevillavirtual.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Rubén Navarro del Castillo 2024 Sevilla Virtual. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
